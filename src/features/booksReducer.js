import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push();
    },
    deleteBook: (state, action) => {},
    updateBook: (state, action) => {},
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
