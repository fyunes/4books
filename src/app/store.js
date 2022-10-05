import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/booksReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});