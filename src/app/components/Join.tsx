import * as React from 'react';
import { AuthContext } from '../App';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import {firstLogin} from "../../../utils/users/firstLogIn";


const Join = ({ history }: any) => {
  const [error, setErrors] = React.useState('');
  const Auth = React.useContext(AuthContext);

  React.useEffect(() => {
    // recieve redirect
    const unsubscribe: any = firebase
      .auth()
      .getRedirectResult()
      .then(function(authData) {
        console.log(authData);
        if (authData.user) {firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
          Auth.setLoggedIn(true);
          console.log(authData)
          authData.additionalUserInfo.isNewUser && firstLogin(authData)
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    return () => unsubscribe();
  }, []);

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
      console.log(firebase.auth()),
    <div>
      {Auth.isLoggedIn===true ? <div><button onClick={()=>(firebase.auth().signOut())}>LOGOUT</button></div> :
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
          }
    </div>

  );
};

export default Join;
