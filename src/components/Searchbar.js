import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

// import
import './Searchbar.css';

export default function Searchbar() {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('');
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
