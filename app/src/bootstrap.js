import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoStore from './model/TodoStore';
  
export default () => {
  const todoStore = new TodoStore('todos');
  
  ReactDOM.render(
    <App model={todoStore} />,
    document.getElementById('root')
  );
};

