import * as React from 'react';
import NavBar from "./NavBar";
import ClockButton from './ClockButton'
import {rootReducer, initialState} from "../store/rootReducer";
import {createContext} from 'react'

export const StoreContext = createContext(null)

const MainFrame = (props: object) => {
const store: any = React.useReducer(rootReducer,initialState)

    return (
<StoreContext.Provider value={store}>
        <div>
<NavBar/>
<ClockButton  />
        </div>
</StoreContext.Provider>
    )
}

export default MainFrame
