import * as firebase from "firebase";
import {db}  from '../../server/firebase'


export const firstLogin  =(user: any) => db()
        .collection('Users')
        .add({
        uid: user.user.uid,
        email: user.user.email,
        displayName: user.user.displayName,
        photoURL: user.user.photoURL


        }).then(function(docRef: any) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error: any) {
          console.error('Error adding document: ', error);
        });

