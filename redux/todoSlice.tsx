import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    list: [] as Todo[],
    lastId: 0,
    completedTodo: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action) => {
      const newId = state.lastId + 1;
      const newTodo: Todo = {
        id: newId,
        title: action.payload.title,
        description: action.payload.description,
        completed: action.payload.completed,
      };
      state.list.push(newTodo);
      state.lastId = newId;
      AsyncStorage.setItem("todos", JSON.stringify(state.list));
    },
    setTodos: (state, action) => {
      state.list = action.payload;
      state.lastId = action.payload.length
        ? action.payload[action.payload.length - 1].id
        : 0;
    },
    setCompletedTodos: (state, action) => {
      state.completedTodo = action.payload;
      state.lastId = action.payload.length
        ? action.payload[action.payload.length - 1].id
        : 0;
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.list.findIndex((todo) => todo.id === updatedTodo.id);

      if (index !== -1) {
        if (updatedTodo.completed) {
          state.completedTodo.push(updatedTodo);
          state.list = state.list.filter((todo) => todo.id !== updatedTodo.id);
        } else {
          state.list[index] = updatedTodo;
        }
        AsyncStorage.setItem("todos", JSON.stringify(state.list));
        AsyncStorage.setItem(
          "completedTodos",
          JSON.stringify(state.completedTodo)
        );
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
      state.completedTodo = state.completedTodo.filter(
        (todo) => todo.id !== id
      );

      state.lastId = state.list.length
        ? state.list[state.list.length - 1].id
        : 0;
      AsyncStorage.setItem("todos", JSON.stringify(state.list));
      AsyncStorage.setItem(
        "completedTodos",
        JSON.stringify(state.completedTodo)
      );
    },
  },
});

export const TodoAction = TodoSlice.actions;

export default TodoSlice;
