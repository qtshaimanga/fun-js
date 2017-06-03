import React from 'react';
import { withState, withHandlers, compose } from 'recompose';

const onChange = ({ setValue }) => e => setValue(e.target.value);

const makeNewTodo = compose(
  withState('value', 'setValue', ''),
  withHandlers({ onChange })
);

const NewTodo = ({ value, onChange }) => (
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    autoFocus={true}
    value={value}
    onChange={onChange}
  />
);

export default makeNewTodo(NewTodo);