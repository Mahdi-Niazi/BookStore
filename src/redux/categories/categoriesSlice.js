import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkState: (state, action) => {
      state.categories = action.payload === 'Under Construction'
        ? ['Under Construction']
        : state.categories;
    },
  },
});

export default categoriesSlice.reducer;