import { v4 as newUuid } from 'uuid';

class TodoStore {
  constructor(key) {
    this.key = key;
    this.todos = JSON.parse(localStorage.getItem(key) || '[]');
  }

  persist() {
    localStorage.setItem(this.key, JSON.stringify(this.todos));
  }

  addTodo(title) {
    this.todos.push({
      id: newUuid(),
      title: title,
      completed: false
    });
    this.persist();
  }

  toggleAll(checked) {
    for (let todo of this.todos) {
      todo.completed = checked;
    }
    this.persist();
  }

  toggle(todoToToggle) {
    for (let todo of this.todos) {
      if (todo === todoToToggle) {
        todo.completed = !todo.completed;
      }
    }
    this.persist();
  }

  destroy(todoToDestroy) {
    let indexOfTodoToDestroy = this.todos.indexOf(todoToDestroy);
    if (indexOfTodoToDestroy !== -1) {
      this.todos.splice(indexOfTodoToDestroy, 1);
    }
    this.persist();
  }

  clearCompleted() {
    for (let i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i].completed === true) {
        this.todos.splice(i, 1);
      }
    }
    this.persist();
  }
}

export default TodoStore;
