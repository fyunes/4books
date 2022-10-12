import { createSlice, current } from "@reduxjs/toolkit";
import items from "../../assets/myBooks.json";

const initialState = [...items.books];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      console.log('this is inside deleteBook');
      console.log('this is state', current(state));
      console.log('this is payload', action.payload);
      return state.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {},
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
