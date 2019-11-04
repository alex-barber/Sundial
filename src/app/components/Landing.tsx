import * as React from 'react';
import firebase from 'firebase';
import Join from './Join';
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
    console.log(props.location),
    (
      <div>
        <div>
          {firebase.auth().currentUser == null ? (
            <Join />
          ) : (
            <Redirect to="/home" />
          )}
        </div>
        <hr />
        <hr />
        {/*<PostTimer />*/}
      </div>
    )
  );
};

export default withRouter(Landing);
