import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    list: [
      {
        id: 1,
        title: "First Todo",
        description:
          "Some description that will be displayed. more text comes in here will be tested to know it the texts fits more text comes in here will be tested to know it the texts fits",
      },
    ],
  },
  reducers: {
    setList: (state, action) => {
      console.log(action.payload);
      // state.list = action.payload;
    },
  },
});

export const TodoAction = TodoSlice.actions;

export default TodoSlice;
