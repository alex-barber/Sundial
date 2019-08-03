import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainFrame from './components/MainFrame';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { firebaseConfig } from '../../server/firebase/index';
import * as firebase from 'firebase';
import { routes } from './constants/routes';
import Header from './components/Header';
import Join from './components/Join';
import { rootReducer, initialState } from './store/rootReducer';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';

// firebase.initializeApp(firebaseConfig);
// export const db: any = firebase.firestore;

declare let module: any; // for hotreloader

export const AuthContext = React.createContext(null);
export const StoreContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const store: any = React.useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={store}>
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <div className="App">
          <Router>
            {/*<Header />*/}

            <MainFrame />
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
    </StoreContext.Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept(); // for hotreloader
}
