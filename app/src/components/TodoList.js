import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.toggleAll = this.toggleAll.bind(this);
  }
  
  toggleAll(event) {
    this.props.onToggleAll(event.target.checked);
  }
  
  render() {
    const todoItems = [];
    for (const todo of this.props.todos) {
      todoItems.push(
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={this.props.onToggleOne}
          onDestroy={this.props.onDestroy}
        />
      );
    }
        
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
          checked={this.props.allCompleted}
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {todoItems}
        </ul>
      </section>
    );
  }
}

export default TodoList;