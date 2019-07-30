//
import * as  React from "react";
import Login from "../components/Login";
import Join from "../components/Join";

export const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];


