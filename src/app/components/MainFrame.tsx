import * as React from 'react';
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

const MainFrame = (props: object) => {
  return (
    <div>
      <NavBar />
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

export default MainFrame;
