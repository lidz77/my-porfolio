import React from 'react';
import '../App.css';
import Todos from '../features/todos/Todos';
import Quotes from '../features/quotes/Quotes';
import Weather from '../features/weather/Weather';
import BackgroundImages from '../features/backgroundImages/BackgroundImages'

function App() {
  return (
    <div className="App">
      <Weather />
      <Todos />
      <Quotes />
      <BackgroundImages />
    </div>
  );
}

export default App;
