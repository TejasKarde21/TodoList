import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const ModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(TodoContext);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="mb-4">
      <label className="inline-flex items-center text-gray-700 dark:text-white">
        <span className="mr-2 text-black">Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleToggleDarkMode}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </label>
    </div>
  );
};

export default ModeToggle;
