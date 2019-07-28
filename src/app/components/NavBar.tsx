import * as React from 'react';
import {StoreContext} from './MainFrame'
import {addTest} from "../store/test";


const NavBar = (props: object) => {
const [state, dispatch]= React.useContext(StoreContext)

    return (
        console.log(state),
            <div>
        <div style={{backgroundColor: 'grey', width: '100%', height: '4vh', display: 'flex', justifyContent: 'center' }}>
            CLOCKJOURNAL
        </div>
                            <span>{state.testState}</span>
<button onClick={()=>dispatch(addTest('ROGER'))}>ROGER</button>
<button onClick={()=>dispatch(addTest('ALEX'))}>ALEX</button>

            </div>

    )
}

export default NavBar
