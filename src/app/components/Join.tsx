import * as React from 'react';
import { AuthContext } from '../App';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';

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
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = () => {
    console.log('running');
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
    <div>
      {Auth.isLoggedin===true ? <div><button onClick={()=>(firebase.auth().signOut())}>LOGOUT</button></div> :
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
