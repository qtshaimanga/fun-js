import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './fun-components/App';
import rootReducer from './model/reducer';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const appRoot = document.getElementById('root');
const store = createStore(rootReducer);
const dispatch = store.dispatch.bind(store);

const render = () => ReactDOM.render(
  <App todos={store.getState()} dispatch={dispatch} />,
  appRoot
);

store.subscribe(render);
render();