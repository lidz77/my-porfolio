import React from 'react';
import '../App.css';
import Todos from '../features/todos/Todos';
import Quotes from '../features/quotes/Quotes'

function App() {
  return (
    <div className="App">
      <Todos />
      <Quotes />
    </div>
  );
}

export default App;
