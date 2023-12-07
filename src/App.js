import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchBar from './SearchBar';
import ModeToggle from './ModeToggle';
import { TodoProvider } from './TodoContext';
import './index.css';

const App = () => {
  return (
    <TodoProvider>
   
      <div className="container mx-auto p-4 ml-[10%] ">
        <ModeToggle />
        <SearchBar />
        <TodoForm />
        <TodoList />
      </div>
      
    </TodoProvider>
  );
};

export default App;
