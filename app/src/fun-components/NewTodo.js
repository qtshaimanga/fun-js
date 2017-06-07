import React from 'react';
import { withState, withHandlers } from 'recompose';
import { compose } from 'ramda';

const withValue = withState('value', 'setValue', '');

const onChange = ({ setValue }) => (event) => setValue(event.target.value);
const onKeyDown = ({ value, setValue, onCommit }) => (event) => {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      if (value !== '') { onCommit(value.trim()); }
      setValue('');
      break;
    case 'Escape':
      event.preventDefault();
      setValue('');
      break;
    default:
    // noop
  }    
};
const withOnChangeAndOnKeyDown = withHandlers({ onChange, onKeyDown });

const enhance = compose(withValue, withOnChangeAndOnKeyDown);

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

export default enhance(NewTodo);