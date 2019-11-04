//
import * as  React from "react";
import Login2 from "../components/Login2";
import {SingleProjectView} from "../components/SingleProjectView"
import MainFrame from "../components/MainFrame";
import Join from "../components/Login";
import ProjectView from "../components/ProjectsView";
import Landing from "../components/Landing";
import {AuthContext} from "../App";
import * as firebase from 'firebase';

export const routes = [

  // { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login2", path: "/login", exact: true, main: () => <Login2 /> },
  { name: "Projects", path: "/projects", exact: true, main: () => <ProjectView /> },

  { name: "SingleProjectView", path: "/projects/:projectID", exact: true, main: () => <SingleProjectView /> },
  { name: "Home", path: "/home", exact: true, main: () => <MainFrame /> },

];


