import React, { useContext, useState } from 'react';
import { useTodoContext } from './TodoContext';

const SearchBar = () => {
  const { dispatch } = useTodoContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch({ type: 'SEARCH_TODO', searchTerm });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Todos</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-green-500 text-white p-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
