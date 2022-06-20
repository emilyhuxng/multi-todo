import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { todoLists: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoList(state) {
      state.todoLists.push({
        listId: "list" + state.todoLists.length,
        title: "Click me to edit title",
        filter: "all",
        list: [],
      });
    },
    deleteAllTodoLists(state) {
      state.todoLists = [];
    },
    changeTitle(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          return { ...todoList, title: action.payload.title };
        } else {
          return todoList;
        }
      });
    },
    addTodo(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          return {
            ...todoList,
            list: [
              ...todoList.list,
              {
                ...action.payload.taskContent,
                itemId: "item" + todoList.list.length,
              },
            ],
          };
        } else {
          return todoList;
        }
      });
    },
    changeSelected(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          const newList = todoList.list.map((item) => {
            if (item.itemId === action.payload.itemId) {
              return { ...item, isSelected: action.payload.isSelected };
            } else {
              return item;
            }
          });
          return {
            ...todoList,
            list: newList,
          };
        } else {
          return todoList;
        }
      });
    },
    changeFilter(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          return { ...todoList, filter: action.payload.filter };
        } else {
          return todoList;
        }
      });
    },
    changeTodo(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          const newList = todoList.list.map((item) => {
            if (item.itemId === action.payload.itemId) {
              return { ...item, content: action.payload.content };
            } else {
              return item;
            }
          });
          return {
            ...todoList,
            list: newList,
          };
        } else {
          return todoList;
        }
      });
    },
    removeTodo(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (action.payload.listId === todoList.listId) {
          const newList = todoList.list.filter((item) => {
            return item.itemId !== action.payload.itemId;
          });
          return {
            ...todoList,
            list: newList,
          };
        } else {
          return todoList;
        }
      });
    },
    addDueDate(state, action) {
      state.todoLists = state.todoLists.map((todoList) => {
        if (todoList.listId === action.payload.listId) {
          const newList = todoList.list.map((item) => {
            if (item.itemId === action.payload.itemId) {
              return { ...item, dueDate: action.payload.dueDate };
            } else {
              return item;
            }
          });
          return {
            ...todoList,
            list: newList,
          };
        } else {
          return todoList;
        }
      });
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const todoActions = todoSlice.actions;

export default store;
