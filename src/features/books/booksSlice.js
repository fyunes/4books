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
    deleteBook: (state, action) =>
      state.filter((book) => book.id !== action.payload),
    updateBook: (state, action) => {},
    searchBooks: (state, action) => {
      return action.payload;
    },
    showAll: (state, action) => {
      const deletedBooks = action.payload;
      const newState = deletedBooks.length
        ? items.books.filter((book) => {
            if (!deletedBooks.includes(book.id)) return book;
            else return null;
          })
        : items.books;
      return newState;
    },
  },
});

export const { addBook, deleteBook, updateBook, searchBooks, showAll } =
  booksSlice.actions;
export default booksSlice.reducer;
