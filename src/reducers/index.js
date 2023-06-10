import { combineReducers } from 'redux';
import greetingReducer from './reducers';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
