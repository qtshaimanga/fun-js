import { v4 as newUuid } from 'uuid';
import { append, map, set, equals, ifElse, over, lensProp, not, identity, without, filter, compose, view } from 'ramda';

// actions

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  todo: {
    id: newUuid(),
    title: text,
    completed: false
  }
});

export const toggleAll = (completed) => ({
  type: 'TOGGLE_ALL',
  completed
});

export const toggleOne = (todo) => ({
  type: 'TOGGLE_ONE',
  todo
});

export const destroy = (todo) => ({
  type: 'DESTROY',
  todo
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED'
});


const completedLens = lensProp('completed');
const isActive = compose(not, view(completedLens));
const toggleCompleted = over(completedLens, not);
const setCompleted = set(completedLens);

const transform = (action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return append(action.todo);
    case 'TOGGLE_ALL':
      return map(setCompleted(action.completed));
    case 'TOGGLE_ONE':
      return map(ifElse(equals(action.todo), toggleCompleted, identity));
    case 'DESTROY':
      return without([action.todo]);
    case 'CLEAR_COMPLETED':
      return filter(isActive)
    default:
      return identity;
  }
};

export const todoReducer = (todos = [], action) => {
  return transform(action)(todos); 
};