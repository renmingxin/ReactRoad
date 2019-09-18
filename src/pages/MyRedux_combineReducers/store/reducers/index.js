// import { combineReducers } from 'redux';
import todoList from './todoList';
import counter from './counter';

import {combineReducers as combine } from '../../redux'

export default combine({
  todoList,
  counter,
})

