import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  selectors: {
    selectFilter: state => state.filter,
  },
});

export const { changeFilter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
export const filterReducer = filterSlice.reducer;
