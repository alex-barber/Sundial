import * as firebase from 'firebase';
import { db } from '../../server/firebase';

export const addProject = async (name: string) => {
  try {
    const batch = db.batch();

    const data = await db
      .collection('Users')
      .where('uid', '==', firebase.auth().currentUser.uid)
      .get();

    const userRef = data.docs[0].ref;
    const userData = data.docs[0].data();

    console.log(userData, firebase.auth().currentUser.uid);

    const projectInfo = {
      name: name,
      description: 'New project!',
      totalPosts: 0,
      dateCreated: new Date().toLocaleString(),
      timestamp: Date.now(),
      totalMembers: 1,
    };

    const projectRef = db.collection('Projects').doc();

    const project = batch.set(projectRef, {
      ...projectInfo,
      members: {
        list: [userData.uid],
        [userData.uid]: {
          role: 'Owner',
          name: userData.displayName,
          myPostCount: 0,
        },
      },
      tags: [],
    });

    console.log(projectRef);

    batch.update(userRef, {
      projects: {
        [projectRef.id]: {
          ...projectInfo,
          role: 'Owner',
          myPostCount: 0,
        },
      },
    });

    batch.commit().then(function() {
      console.log('batchwrite succesful');
    });
  } catch (error) {
    console.error(error);
  }
};
