import * as React from 'react';
import { AuthContext } from '../App';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { firstLogin } from '../../../utils/users/firstLogIn';

const Login = ({ history }: any) => {
  const [error, setErrors] = React.useState('');
  const Auth = React.useContext(AuthContext);

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithRedirect(provider);
      });
  };

  const handleSignOut = (): void => {
    firebase.auth().signOut();
    Auth.setLoggedIn(false);
  };

  return (
    console.log(AuthContext),
    (
<div className="h-56">
        <button
          onClick={() => handleGoogleLogin()}
          className="border border-gray-400"
          type="button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
</div>

    )
  );
};

export default withRouter(Login);
