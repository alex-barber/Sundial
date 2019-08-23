//
import * as  React from "react";
import Login from "../components/Login";
import {SingleProjectView} from "../components/SingleProjectView"
import MainFrame from "../components/MainFrame";
import Join from "../components/Join";
import ProjectView from "../components/ProjectsView";
import Landing from "../components/Landing";
import {AuthContext} from "../App";
import * as firebase from 'firebase';

export const routes = [

  // { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> },
  { name: "Projects", path: "/projects", exact: true, main: () => <ProjectView /> },

  { name: "SingleProjectView", path: "/projects/:projectID", exact: true, main: () => <SingleProjectView /> },
  { name: "Home", path: "/home", exact: true, main: () => <MainFrame /> },

];


