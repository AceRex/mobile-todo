import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
  devTools: true,
});

export default store;
