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

const completedLens = lensProp('completed');
const isActive = compose(not, view(completedLens));
const toggleCompleted = over(completedLens, not);
const setCompleted = set(completedLens);


const transform = (action) => {
  switch (action.type) {
    case ADD_TODO:
      return append(action.todo);
    case TOGGLE_ALL:
      return map(setCompleted(action.completed));
    case TOGGLE_ONE:
      return map(ifElse(equals(action.todo), toggleCompleted, identity));
    case DESTROY:
      return without([action.todo]);
    case CLEAR_COMPLETED:
      return filter(isActive)
    default:
      return identity;
  }
};


export default (todos = [], action) => {
  return transform(action)(todos); 
};