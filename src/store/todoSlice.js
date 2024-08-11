import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
const initialState = {
  fetchTodo: false,
  todos: [
    {
      id: 1,
      title: "Drink Water",
    },
    {
      id: 2,
      title: "Play games",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos = state.todos.concat([
        { title: action.payload.title, id: uuid.v4() },
      ]);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          todoItem.title = action.payload.title;
          return todoItem;
        }
        return todoItem;
      });
      state.todos.concat([action.payload]);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
    },
  },
});

const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export const TodoAction = {
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoSlice.reducer;