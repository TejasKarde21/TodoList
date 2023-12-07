import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, searchTerm, dispatch } = useTodoContext();
  const [updatedTodo, setUpdatedTodo] = useState(null);

  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateTodo = (todo) => {
    setUpdatedTodo(todo);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: 'DELETE_TODO', todoId });
  };

  const handleSaveUpdate = () => {
    dispatch({ type: 'UPDATE_TODO', todo: updatedTodo });
    setUpdatedTodo(null);
  };

  return (
    <div className="my-4 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="border p-4 mb-4 rounded">
            {updatedTodo && updatedTodo.id === todo.id ? (
              <>
                <input
                  type="text"
                  value={updatedTodo.description}
                  onChange={(e) =>
                    setUpdatedTodo({ ...updatedTodo, description: e.target.value })
                  }
                  className="border p-2 mb-2 w-full"
                />
                <button onClick={handleSaveUpdate} className="bg-blue-500 text-white p-2">
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{todo.description}</p>
                <p>{todo.dueDate}</p>
                <p>{todo.priority}</p>
                <p>{todo.notes}</p>
                <button onClick={() => handleUpdateTodo(todo)} className="bg-yellow-500 text-white p-2">
                  Update
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500 text-white p-2 ml-2">
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
