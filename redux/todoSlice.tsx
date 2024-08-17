import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  title: string;
  description: string;
}

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    list: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = action.payload;
      state.list.push(newTodo);
    },
  },
});

export const TodoAction = TodoSlice.actions;

export default TodoSlice;
