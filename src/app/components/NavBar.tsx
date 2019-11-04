import * as React from 'react';
import * as firebase from 'firebase';
import { addTest } from '../store/test';
import { AuthContext } from '../App';
import Join from './Join';
const NavBar = (props: object) => {
  // //
  const Auth = React.useContext(AuthContext);

  const handleSignOut = () => {
    firebase.auth().signOut();
    Auth.setLoggedIn(false);
  };

  return (
    <div
      style={{
        height: '7vh',
        width: '100vw',
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
      }}
    >
      <span>Logged in? {JSON.stringify(Auth.isLoggedIn)}</span>
      <h2>Sundial</h2>
      <Join />
    </div>
  );
};

export default NavBar;
