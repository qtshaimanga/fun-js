import React from 'react';
import { withHandlers } from 'recompose';

// general utils
const capitalize = (w) => w.charAt(0).toUpperCase() + w.substr(1);
const pluralize = (w, count) => count === 1 ? w : w + 's';

// hoc
const handleShow = ({ onShow }) => (event) => {
  event.preventDefault();
  onShow(event.target.name);
};
const enhance = withHandlers({ handleShow });

// sub components
const makeLink = (current, handle) => ({ to }) => (
  <a name={to} className={to === current ? 'selected' : undefined} onClick={handle}>{capitalize(to)}</a>
);

const TodoCount = ({ active }) => (
  <span className="todo-count">
    <strong>{active}</strong> {pluralize('item', active)} left
  </span>
);

const TodoFooter = ({ activeCount, completedCount, onClearCompleted, nowShowing, handleShow }) => {
  const Link = makeLink(nowShowing, handleShow);
  return (
    <footer className="footer">
      <TodoCount active={activeCount} />
      <ul className="filters">
        <li><Link to="all" /></li>
        <li><Link to="active" /></li>
        <li><Link to="completed" /></li>
      </ul>
      { completedCount > 0 &&
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      }
    </footer>
  );
};

export default enhance(TodoFooter);
