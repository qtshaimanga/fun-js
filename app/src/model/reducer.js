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

import { ADD_TODO, TOGGLE_ALL, TOGGLE_ONE, DESTROY, CLEAR_COMPLETED } from './actions';

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