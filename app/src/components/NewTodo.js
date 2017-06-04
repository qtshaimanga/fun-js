import React from 'react';
import { withState, withHandlers, compose } from 'recompose';

const onChange = ({ setValue }) => e => setValue(e.target.value);

const onKeyDown = ({ value, setValue, onCommit }) => e => {
  switch (e.key) {
    case 'Enter':
      e.preventDefault();
      value && onCommit(value);
      setValue('');
      break;
    case 'Escape':
      e.preventDefault();
      setValue('');
      break;
    default:
    // noop
  }
};

const makeNewTodo = compose(
  withState('value', 'setValue', ''),
  withHandlers({ onChange, onKeyDown })
);

const NewTodo = ({ value, onChange, onKeyDown }) => (
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    autoFocus={true}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export default makeNewTodo(NewTodo);