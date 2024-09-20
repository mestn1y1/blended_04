import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;

export const { selectTodos } = todoSlice.selectors;
