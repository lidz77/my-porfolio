import React from 'react';
import '../App.css';
import Todos from '../features/todos/Todos';
import Quotes from '../features/quotes/Quotes';
import Weather from '../features/weather/Weather';
import BackgroundImages from '../features/backgroundImages/BackgroundImages'

function App() {
  return (
    <div className="App">
      <BackgroundImages />
      <Weather />
      <Todos />
      <Quotes />
    </div>
  );
}

export default App;
