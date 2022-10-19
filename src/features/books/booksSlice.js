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
    updateBook: (state, action) => {
      const { title, image, author, year, category, id, description } =
        action.payload;
      const foundBook = state.find((book) => book.id === id);
      if (foundBook) {
        foundBook.title = title;
        foundBook.image = image;
        foundBook.author = author;
        foundBook.year = year;
        foundBook.category = category;
        foundBook.description = description;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
