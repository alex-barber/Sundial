import * as React from 'react';
// import NavBar from "./NavBar";
import ClockButton from './ClockButton'
import Landing from "./Landing";
import {rootReducer, initialState} from "../store/rootReducer";
import {createContext} from 'react'
import {Link, Route, BrowserRouter as Router, NavLink} from 'react-router-dom'
import * as ROUTES from '../constants/routes'


export const StoreContext = createContext(null)

const MainFrame = (props: object) => {
const store: any = React.useReducer(rootReducer,initialState)

    return (
<StoreContext.Provider value={store}>
    <Router>

<hr />
 {/*<NavBar/>*/}

    </Router>
</StoreContext.Provider>
    )
}

export default MainFrame
