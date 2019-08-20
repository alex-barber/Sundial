import combineReducers from './combineReducers';
import testReducer from './test';
import timerStatusReducer from  './timerStatusReducer'

export const initialState = {
  testState: 'Alex' as string,
  timerStatus: false as boolean,
};

export const rootReducer = combineReducers({
  testState: testReducer,
  timerStatus: timerStatusReducer
});
