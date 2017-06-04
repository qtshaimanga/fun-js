import React from 'react';
import NewTodo from './NewTodo';

const App = () => (
  <div>
    <header className="header">
      <h1>todos</h1>
      <NewTodo onCommit={console.log} />
    </header>
  </div>
);

export default App;
