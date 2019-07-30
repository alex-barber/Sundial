import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainFrame from './components/MainFrame';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { firebaseConfig } from '../../server/firebase/index';
import * as firebase from 'firebase';
import Header from './components/Header';
firebase.initializeApp(firebaseConfig);
import {routes} from "./constants/routes";

declare let module: any; // for hotreloader

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">

        <Router>
          <Header />
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>

        </Router>
      </div>
    </AuthContext.Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept(); // for hotreloader
}
