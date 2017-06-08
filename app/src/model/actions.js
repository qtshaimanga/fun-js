import { v4 as newUuid } from 'uuid';


export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const TOGGLE_ONE = 'TOGGLE_ONE';
export const DESTROY = 'DESTROY';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


export const makeAddTodoWithId = (getId) => (text) => ({
  type: ADD_TODO,
  todo: {
    id: getId(),
    title: text,
    completed: false
  }
});
export const addTodo = makeAddTodoWithId(newUuid);

export const toggleAll = (completed) => ({
  type: TOGGLE_ALL,
  completed
});

export const toggleOne = (todo) => ({
  type: TOGGLE_ONE,
  todo
});

export const destroy = (todo) => ({
  type: DESTROY,
  todo
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});
