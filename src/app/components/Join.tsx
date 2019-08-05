import * as React from 'react';
import { AuthContext } from '../App';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import {firstLogin} from "../../../utils/users/firstLogIn";


const Join = ({ history }: any) => {
  const [error, setErrors] = React.useState('');
  const Auth = React.useContext(AuthContext);



  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        firebase.auth().signInWithRedirect(provider);
      });
  };

  const handleSignOut = (): void => {
    firebase.auth().signOut()
    Auth.setLoggedIn(false)
  }

  return (
      console.log(AuthContext),
    <div>

          <div>
          <button
        onClick={() => handleGoogleLogin()}
        className="googleBtn"
        type="button"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="logo"
        />
        Login With Google
      </button>
      <span>{error}</span>
          </div>

    </div>

  );
};

export default withRouter(Join);
