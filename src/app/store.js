import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'
import quotesReducer from '../features/quotes/quotesSlice';
import weatherReducer from '../features/weather/weatherSlice';
import backgroundImagesReducer from '../features/backgroundImages/backgroundImagesSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quotes: quotesReducer,
    weather: weatherReducer,
    backgroundImages: backgroundImagesReducer
  },
});
