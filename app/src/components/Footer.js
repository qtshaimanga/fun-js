import React, { Component } from 'react';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
  }
  
  handleShow(e) {
    e.preventDefault();
    this.props.onShow(e.target.name);
  }

  classNameFor(link) {
    return this.props.nowShowing === link ? 'selected' : '';
  }

  render() {
    const { activeCount, completedCount, onClearCompleted } = this.props;    
    const activeTodoWord = activeCount === 1 ? 'item' : 'items';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a name="all" className={this.classNameFor('all')} onClick={this.handleShow}>All</a>
          </li>
          {' '}
          <li>
            <a name="active" className={this.classNameFor('active')} onClick={this.handleShow}>Active</a>
          </li>
          {' '}
          <li>
            <a name="completed" className={this.classNameFor('completed')} onClick={this.handleShow}>Completed</a>
          </li>
        </ul>
        { completedCount > 0 &&
          <button
            className="clear-completed"
            onClick={onClearCompleted}>
            Clear completed
          </button>
        }
      </footer>
    );
  }
}

export default TodoFooter;
