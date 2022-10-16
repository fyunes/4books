import { createSlice } from "@reduxjs/toolkit";
import items from "../../assets/myBooks.json";

const books = items.books;

const getFilters = (filterName, currentBooks = books) => {
  return [...new Set(currentBooks.map((book) => book[filterName]))]
    .sort()
    .map((element) => {
      return { value: element, isSelected: false };
    });
};

const initialState = {
  authors: getFilters("author"),
  categories: getFilters("category"),
  years: getFilters("year"),
  filtersSelected: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state[filterName].find(
        (filter) => filter.value === filterValue
      ).isSelected = true;
      state.filtersSelected += 1;
    },
    deleteFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state[filterName].find(
        (filter) => filter.value === filterValue
      ).isSelected = false;
      state.filtersSelected -= 1;
    },
    updateFilters: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectFilter, deleteFilter, updateFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
