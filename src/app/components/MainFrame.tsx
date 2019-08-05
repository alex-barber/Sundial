import * as React from 'react';
import { withRouter } from 'react-router-dom';

// import NavBar from "./NavBar";
import ClockButton from './ClockButton';
import Landing from './Landing';
import { rootReducer, initialState } from '../store/rootReducer';
import {
  Link,
  Route,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import ProjectView from './ProjectsView';
import NavBar from './NavBar';
import LeftBar from './LeftBar';
import * as firebase from "firebase";
import {firstLogin} from "../../../utils/users/firstLogIn";
import {AuthContext} from "../App";

const MainFrame = (props: object) => {
      const Auth = React.useContext(AuthContext);



  return (
    <div>
                    <NavBar/>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '7vw', marginRight: '.5rem' }}>
          <LeftBar />
        </div>
        <div style={{ width: '93vw' }}>

            <hr />

            <ProjectView />
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainFrame);
