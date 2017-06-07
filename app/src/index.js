import React from 'react';
import ReactDOM from 'react-dom';
import App from './fun-components/App';
import TodoStore from './model/TodoStore';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const todoStore = new TodoStore('todos');

ReactDOM.render(
  <App model={todoStore} />,
  document.getElementById('root')
);
