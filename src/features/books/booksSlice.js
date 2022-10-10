import { createSlice } from "@reduxjs/toolkit";
import items from "../../assets/myBooks.json";

const initialState = [...items.books];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {},
    updateBook: (state, action) => {},
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;

