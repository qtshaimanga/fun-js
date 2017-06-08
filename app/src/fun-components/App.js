import React from 'react';
import { withState, withHandlers } from 'recompose';
import { compose, filter, reduce } from 'ramda';

import * as actions from '../model/actions';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const withNowShowing = withState('nowShowing', 'setShowing', 'all');

const addTodo = ({ dispatch }) => (text) => dispatch(actions.addTodo(text));
const toggleAll = ({ dispatch }) => (completed) => dispatch(actions.toggleAll(completed));
const toggleOne = ({ dispatch }) => (todo) => dispatch(actions.toggleOne(todo));
const destroy = ({ dispatch }) => (todo) => dispatch(actions.destroy(todo));
const clearCompleted = ({ dispatch }) => () => dispatch(actions.clearCompleted());
const show = ({ setShowing }) => (filter) => setShowing(filter);

const withAllHandlers = withHandlers({
  addTodo, toggleAll, toggleOne, destroy, clearCompleted, show
});

const enhance = compose(withNowShowing, withAllHandlers);

const App = ({
  todos,
  nowShowing,
  addTodo,
  toggleAll,
  toggleOne,
  destroy,
  clearCompleted,
  show
}) => {

  const shownTodos = filter(todo => {
    switch (nowShowing) {
      case 'active': return !todo.completed;
      case 'completed': return todo.completed;
      default: return true;
    }
  }, todos);
  
  const activeTodoCount = reduce((a, todo) => todo.completed ? a : a + 1, 0, todos);
  const completedTodoCount = reduce((a, todo) => todo.completed ? a + 1 : a, 0, todos);

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <NewTodo onCommit={addTodo} />
      </header>
      {(shownTodos.length > 0) &&
        <TodoList
          todos={shownTodos}
          onToggleAll={toggleAll}
          onToggleOne={toggleOne}
          onDestroy={destroy}
          allCompleted={activeTodoCount === 0}
        />
      }
      {(todos.length > 0) &&
        <Footer
          activeCount={activeTodoCount}
          completedCount={completedTodoCount}
          onClearCompleted={clearCompleted}
          nowShowing={nowShowing}
          onShow={show}
        />
      }
    </div>
  );
};

export default enhance(App);
