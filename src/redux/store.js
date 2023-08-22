import { configureState } from '@reduxjs/toolkit';

import booksReducer from './books/booksSlice';
import CategoriesReducer from './categories/categoriesSlice';

const store = configureState({
  reducers: {
    books: booksReducer,
    categories: CategoriesReducer,
  },
});

export default store;
