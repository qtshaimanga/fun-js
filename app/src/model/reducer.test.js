import { makeAddTodoWithId, toggleAll, toggleOne, destroy, clearCompleted } from './actions';
import reducer from './reducer';

describe('todoReducer', () => {

  const todo1 = Object.freeze({
    id: '1',
    title: 'one',
    completed: true
  });

  const todo2 = Object.freeze({
    id: '2',
    title: 'two',
    completed: false
  });

  it('should return an empty array as inital state', () => {
    const actual = reducer(undefined, {});
    expect(actual).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    const actual = reducer([todo1], makeAddTodoWithId(() => '2')('two'));
    expect(actual).toEqual([todo1, todo2]);
  });

  it('should handle TOGGLE_ALL', () => {
    const actual = reducer([todo1, todo2], toggleAll(true));
    expect(actual).toEqual([todo1, {...todo2, completed: true}]);
  });

  it('should handle TOGGLE_ONE', () => {
    const actual = reducer([todo1, todo2], toggleOne(todo2));
    expect(actual).toEqual([todo1, {...todo2, completed: true}]);
  });

  it('should handle DESTROY', () => {
    const actual = reducer([todo1, todo2], destroy(todo1));
    expect(actual).toEqual([todo2]);
  });

  it('should handle CLEAR_COMPLETED', () => {
    const actual = reducer([todo1, todo2], clearCompleted());
    expect(actual).toEqual([todo2]);
  });
});