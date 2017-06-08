import {
  append,
  map,
  set,
  equals,
  ifElse,
  over,
  lensProp,
  not,
  identity,
  without,
  filter,
  compose,
  view
} from 'ramda';

import { ADD_TODO, TOGGLE_ALL, TOGGLE_ONE, DESTROY, CLEAR_COMPLETED } from './actions'

// implement the reducer so all tests pass
// don't forget: you must not mutate the todos array
// you don't need ramda for this, but if you feel it
// I have used all of the functions above ;)
// use the action constants in your switch statement

export default (todos, action) => {
  return todos; 
};