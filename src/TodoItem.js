import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    dispatch({
      type: 'UPDATE_TODO',
      id: todo.id,
      updatedTodo: {
        ...todo,
        description: updatedDescription,
        // Add other fields (due date, priority, notes) as needed
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center border-b py-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2">
            Update
          </button>
          <button onClick={handleCancel} className="bg-gray-500 text-white p-2">
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{todo.description}</span>
          <button onClick={handleEdit} className="text-blue-500">
            Edit
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })} className="text-red-500">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
