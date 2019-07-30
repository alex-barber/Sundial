import * as React from "react";
import {routes} from "../constants/routes";
import { Link } from "react-router-dom";

const Header = () => {
    return(
  <ul className="nav">
    {routes.map((route: any, i: any) => (
      <li key={i}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

}

export default Header;
