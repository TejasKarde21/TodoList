import React, { useContext, useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoForm = () => {
  const { dispatch } = useTodoContext();
  const [formData, setFormData] = useState({
    description: '',
    dueDate: '',
    priority: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', todo: { ...formData } });
    setFormData({
      description: '',
      dueDate: '',
      priority: '',
      notes: '',
    });
  };

  return (
    <div className="my-4 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Todo description"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleInputChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="priority"
        value={formData.priority}
        onChange={handleInputChange}
        placeholder="Priority"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleInputChange}
        placeholder="Notes"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleAddTodo} className="bg-green-500 text-white p-2">
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
