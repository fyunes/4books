import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import filtersReducer from "../features/books/filtersSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    filters: filtersReducer,
  },
});
