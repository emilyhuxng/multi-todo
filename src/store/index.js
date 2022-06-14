import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { todoLists: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoList(state) {
      state.todoLists.push({
        id: "list" + state.todoLists.length,
        title: "Click me to edit title",
        list: [],
      });
    },
    deleteAllTodoLists(state) {
      state.todoLists = [];
    },
    changeTitle(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.id === todoList.id) {
          return { ...todoList, title: action.payload.title };
        } else {
          return todoList;
        }
      });
    },
    addTodo(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.id === todoList.id) {
          return { ...todoList, list: [...todoList.list, action.payload.taskContent]}
        } else {
          return todoList;
        }
      })
    }
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;

export default store;
