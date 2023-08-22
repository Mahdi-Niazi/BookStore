import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    removeBooks: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;
export default booksSlice.reducer;
