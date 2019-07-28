import combineReducers from "./combineReducers";
import testReducer from "./test";


export const initialState = {
 testState: 'Alex' as string
}





export const rootReducer = combineReducers({
    testState: testReducer
})
