import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'
import quotesReducer from '../features/quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quotes: quotesReducer
  },
});
