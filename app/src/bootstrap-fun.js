import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './fun-components/App';
import rootReducer from './model/reducer';

export default () => {
  const appRoot = document.getElementById('root');

  const loadState = () => {
    const persistedState = localStorage.getItem('todos');
    return persistedState ? JSON.parse(persistedState) : undefined;
  };

  const saveState = (state) => {
    localStorage.setItem('todos', JSON.stringify(state));
  }

  const store = createStore(rootReducer, loadState());

  const renderReactApp = (todos, dispatch) => ReactDOM.render(
    <App todos={todos} dispatch={dispatch} />,
    appRoot
  );

  const render = () => {
    const todos = store.getState();
    saveState(todos);
    renderReactApp(todos, store.dispatch);
  }

  store.subscribe(render);
  render();
};
