import { combineReducers } from 'redux';
import valueListReducer from './valueListReducer';
import selectedReducer from './selectedReducer';
import updateModelReducer from '/updateModelReducer';

/*
reducer that can contains set of reducer, usefull when several reducers are used at a timeS
*/
const globalReducer = combineReducers({
    valueListReducer: valueListReducer,
    selectedReducer : selectedReducer,
    updateModelReducer : updateModelReducer
});
export default globalReducer;