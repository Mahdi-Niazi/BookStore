import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/booksSlice';
import CategoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducers: {
    books: booksReducer,
    categories: CategoriesReducer,
  },
});

export default store;
