import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvZg4JN9x7gTmbq82GZWEki04zd2OVgs0",
  projectId: "sundial-82cc2"
});

const db = firebaseApp.firestore();

export { db };

export const fBaseTest = () => {db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});}

export const addNTest = (arg: any) =>{db.collection("cities").doc(arg).set({
    name: arg
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});}


export const fBaseGetTest = () =>
db.collection("cities")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data); // array of cities objects
  return data
});
