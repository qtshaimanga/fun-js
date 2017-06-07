import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.model.todos,
      nowShowing: 'all'
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleOne = this.toggleOne.bind(this);
    this.destroy = this.destroy.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.show = this.show.bind(this);
  }

  addTodo(text) {
    this.props.model.addTodo(text);
    this.setState({ todos: this.props.model.todos });
  }

  toggleAll(completed) {
    this.props.model.toggleAll(completed);
    this.setState({ todos: this.props.model.todos });
  }

  toggleOne(todo) {
    this.props.model.toggle(todo);
    this.setState({ todos: this.props.model.todos });
  }

  destroy(todo) {
    this.props.model.destroy(todo);
    this.setState({ todos: this.props.model.todos });
  }

  clearCompleted() {
    this.props.model.clearCompleted();
    this.setState({ todos: this.props.model.todos });
  }

  show(filter) {
    this.setState({ nowShowing: filter });
  }

  render() {
    const { todos, nowShowing } = this.state;
    
    const shownTodos = [];
    let activeTodoCount = 0;
    let completedTodoCount = 0;

    for (const todo of todos) {
      if (todo.completed) {
        completedTodoCount++;
        if (nowShowing !== 'active') {
          shownTodos.push(todo);
        }
      } else {
        activeTodoCount++;
        if (nowShowing !== 'completed') {
          shownTodos.push(todo);
        }
      }
    }
        
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <NewTodo onCommit={this.addTodo} />
        </header>
        { (shownTodos.length > 0) &&
          <TodoList
            todos={shownTodos}
            onToggleAll={this.toggleAll}
            onToggleOne={this.toggleOne}
            onDestroy={this.destroy}
            allCompleted={activeTodoCount === 0}
          />
        }
        { (todos.length > 0) &&
          <Footer
            activeCount={activeTodoCount}
            completedCount={completedTodoCount}
            onClearCompleted={this.clearCompleted}
            nowShowing={nowShowing}
            onShow={this.show}
          />
        }
      </div>
    );
  }
}

export default App;
