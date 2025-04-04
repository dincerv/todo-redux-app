import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    filter: 'all' // 'all', 'active', 'completed'
  };

  
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push({
          id: Date.now(),
          text: action.payload,
          completed: false
        });
      },
      toggleTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      setFilter: (state, action) => {
        state.filter = action.payload;
      }
    }
  });
  
  export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;
  export default todosSlice.reducer; 