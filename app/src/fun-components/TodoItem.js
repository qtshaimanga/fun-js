import React from 'react';
import { withHandlers } from 'recompose';

const handleToggle = ({ onToggle, todo }) => () => onToggle(todo);
const handleDestroy = ({ onDestroy, todo }) => () => onDestroy(todo);
const enhance = withHandlers({ handleToggle, handleDestroy });

const TodoItem = ({ todo, handleToggle, handleDestroy }) => (
  <li className={todo.completed ? 'completed' : ''}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <label>{todo.title}</label>
      <button className="destroy" onClick={handleDestroy} />
    </div>
  </li>
);

export default enhance(TodoItem);
