import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: 'rating', sortBy: false },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    changeSort(state, action) {
      state.sort = {
        name: action.payload.name,
        sortProperty: action.payload.sortProperty,
        sortBy: !state.sort.sortBy,
      };
    },
  },
});

export const { setCategoryId, changeSort } = filterSlice.actions;
export default filterSlice.reducer;
