import * as React from 'react';
import firebase from 'firebase';
import Login from './Login';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import MainFrame from './MainFrame';
import { AuthContext } from '../App';
import { firstLogin } from '../../../utils/users/firstLogIn';
import PostTimer from './PostTimer';

const Landing = (props: any) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const Auth = React.useContext(AuthContext);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  React.useEffect(() => {
    // recieve redirect
    const unsubscribe: any = firebase
      .auth()
      .getRedirectResult()
      .then(function(authData) {
        console.log(authData);
        if (authData.user) {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
          console.log(authData);
          authData.additionalUserInfo.isNewUser && firstLogin(authData);
          Auth.setLoggedIn(true);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    return () => unsubscribe();
  }, []);

  return (

          firebase.auth().currentUser == null ? (
        <div className="flex justify-center items-center" id="landing">
            <Login />
        </div>
          ) : (
            <Redirect to="/home" />
          )

  );
};

export default withRouter(Landing);
