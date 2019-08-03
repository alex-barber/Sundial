import * as firebase from 'firebase';
import { db } from '../../server/firebase';

export const addProject = (name: string) => {
  // const batch = db.batch();
  // const user = Promise.resolve(db
  //   .collection('Users')
  //   .where('uid', '==', firebase.auth().currentUser.uid)
  //   .get().then(
  //       (doc: any)=>{
  //           ()=>doc
  //       }
  //
  //     ));
  // console.log(user)
  // const Projects =db.collection('Projects').doc();
  // const project = batch.set(Projects, {
  //   name: name,
  //   totalPosts: 0,
  //   description: 'New project!',
  //   dateCreated: new Date().toLocaleString(),
  //   timestamp: Date.now(),
  //     members: {
  // [user.uid]: {
  // role: 'Owner',
  // postCount: 0,
  // name: user.displayName
  // }
  //     }
  // });
  // console.log(project);
  // batch.commit().then(function(){
  //     console.log("batchwrite succesful")
  // })
  // } catch (error) {
  //   console.error(error);
  // }
};
