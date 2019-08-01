import * as React from 'react';
// import NavBar from "./NavBar";
import ClockButton from './ClockButton'
import Landing from "./Landing";
import {rootReducer, initialState} from "../store/rootReducer";
import {Link, Route, BrowserRouter as Router, NavLink} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import ProjectView from "./ProjectsView";



const MainFrame = (props: object) => {

    return (

<div>
    <hr></hr>

    <ProjectView/>
    </div>

    )
}

export default MainFrame
