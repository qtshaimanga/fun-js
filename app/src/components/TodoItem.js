import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleToggle() {
    this.props.onToggle(this.props.todo);
  }

  handleDestroy() {
    this.props.onDestroy(this.props.todo);
  }

  render() {
    const { todo } = this.props;        
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleToggle}
          />
          <label onDoubleClick={this.handleEdit}>
            {todo.title}
          </label>
          <button className="destroy" onClick={this.handleDestroy} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
