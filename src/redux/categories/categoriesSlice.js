import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state = empty array
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      // Check the payload before updating the state
      state.categories = action.payload === 'Under construction'
        ? ['Under construction']
        : state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
