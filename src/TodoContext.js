import React, { createContext, useReducer, useContext } from 'react';

export const TodoContext = createContext();

const initialState = {
  todos: [],
  searchTerm: '',
  darkMode: false,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { id: Date.now(), ...action.todo }] };
    case 'UPDATE_TODO':
        return {
            ...state,
            todos: state.todos.map((todo) =>
              todo.id === action.todo.id ? { ...todo, ...action.todo } : todo
            ),
          };
     
    case 'DELETE_TODO':
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.todoId),
          };
    case 'SEARCH_TODO':
      return { ...state, searchTerm: action.searchTerm };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <TodoContext.Provider value={{ ...state, dispatch, toggleDarkMode }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
