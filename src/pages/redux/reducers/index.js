import  { combineReducers } from 'redux';

// console.log(redux)
// console.log(combineReducers)

import todoList from './todoList.js';
import counter from './counter.js';

export default combineReducers({
    todoList,
    counter
})
