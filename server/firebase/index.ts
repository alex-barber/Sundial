import firebase from "firebase";

export const firebaseConfig ={
      apiKey: "AIzaSyDvZg4JN9x7gTmbq82GZWEki04zd2OVgs0",
    authDomain: "sundial-82cc2.firebaseapp.com",
    databaseURL: "https://sundial-82cc2.firebaseio.com",
    projectId: "sundial-82cc2",
    storageBucket: "sundial-82cc2.appspot.com",
    messagingSenderId: "783630146081",
    appId: "1:783630146081:web:b7d58ccc81d28841"
}

firebase.initializeApp(firebaseConfig);
export const db: any = firebase.firestore;

// const firebaseApp = firebase.initializeApp({
//       apiKey: "AIzaSyDvZg4JN9x7gTmbq82GZWEki04zd2OVgs0",
//     authDomain: "sundial-82cc2.firebaseapp.com",
//     databaseURL: "https://sundial-82cc2.firebaseio.com",
//     projectId: "sundial-82cc2",
//     storageBucket: "sundial-82cc2.appspot.com",
//     messagingSenderId: "783630146081",
//     appId: "1:783630146081:web:b7d58ccc81d28841"
// });

// const db = firebaseApp.firestore();

// export { db, firebaseApp };





// export const fBaseTest = () => {db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });}
//
// export const addNTest = (arg: any) =>{db.collection("cities").doc(arg).set({
//     name: arg
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });}
//
//
// export const fBaseGetTest = () =>
// db.collection("cities")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data); // array of cities objects
//   return data
// });
//
// // export const googleSignIn = () =>{
// //     const base_provider = new firebase.auth.GoogleAuthProvider()
// // }
