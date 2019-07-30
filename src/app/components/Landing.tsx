import * as React from 'react';
import { StoreContext } from './MainFrame';
import firebase from 'firebase';

const Landing = (props: object) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn =  () => {
     firebase.auth().signInWithRedirect(provider);
  };




  React.useEffect(() => {
console.log(firebase.auth().currentUser)
  });

  return (
    <div>
      <button onClick={() => signIn()}>Sign in with googlay</button>

    </div>
  );
};

export default Landing;
