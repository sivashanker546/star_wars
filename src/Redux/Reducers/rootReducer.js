import {combineReducers}  from 'redux';

import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
export default combineReducers({user : loginReducer, search : searchReducer});

