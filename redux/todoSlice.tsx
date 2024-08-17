import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    show: "Hello Todo",
  },
  reducers: {},
});

export const TodoAction = TodoSlice.actions;

export default TodoSlice;
