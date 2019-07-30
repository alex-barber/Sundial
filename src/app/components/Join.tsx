import * as React from 'react';
import { AuthContext } from '../App';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';

const Join = ({ history }: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setErrors] = React.useState('');

  const Auth = React.useContext(AuthContext);
  const handleForm = (e: any) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch(e => {
        setErrors(e.message);
      });
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

    // firebase
    // .auth()
    // .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //   .then(() => {
    //     firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then(result => {
    //       console.log(result)
    //                   Auth.setLoggedIn(true)
    //
    //       history.push('/reports')
    //     })
    //     .catch(e => setErrors(e.message))
    //   })

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithRedirect(provider);
      });
  };

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button
          onClick={() => handleGoogleLogin()}
          className="googleBtn"
          type="button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>

        <button type="submit">Join</button>

        <span>{error}</span>
      </form>
    </div>
  );
};

export default Join;
