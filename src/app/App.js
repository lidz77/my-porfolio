import React from 'react';
import '../App.css';
import Todos from '../features/todos/Todos';
import Quotes from '../features/quotes/Quotes';
import Weather from '../features/weather/Weather'

function App() {
  return (
    <div className="App">
      <Weather />
      <Todos />
      <Quotes />
    </div>
  );
}

export default App;
