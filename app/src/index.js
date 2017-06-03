import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
