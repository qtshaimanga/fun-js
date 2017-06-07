import React from 'react';
import { withHandlers } from 'recompose';
import { map } from 'ramda';
import TodoItem from './TodoItem';

const toggleAll = ({ onToggleAll }) => (event) => onToggleAll(event.target.checked);
const enhance = withHandlers({ toggleAll });

const itemsWithHandlers = (toggle, destroy) => map(todo => (
  <TodoItem
    key={todo.id}
    todo={todo}
    onToggle={toggle}
    onDestroy={destroy}
  />
));

const TodoList = ({ todos, onToggleOne, onDestroy, toggleAll, allCompleted }) => {
  const itemsForTodos = itemsWithHandlers(onToggleOne, onDestroy);
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={allCompleted}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {itemsForTodos(todos)}
      </ul>
    </section>
  );
};

export default enhance(TodoList);