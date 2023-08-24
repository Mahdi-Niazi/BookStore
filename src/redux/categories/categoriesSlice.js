import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkState: (state) => {
      state.categories.push('Under Construction');
    },
  },
});

export const { checkState } = categoriesSlice.actions;
export default categoriesSlice.reducer;
