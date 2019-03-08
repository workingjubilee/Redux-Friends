import { combineReducers } from 'redux';
import friendReducer from './friendReducer';
import loginReducer from './friendReducer';

export default combineReducers({
  friends: friendReducer,
  login: loginReducer
});
