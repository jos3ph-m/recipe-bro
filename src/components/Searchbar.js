import React, { useState } from 'react';

// import
import './Searchbar.css';

export default function Searchbar() {
  const [term, setTerm] = useState('')


  return (
    <div className="searchbar">
      <form onSubmit={}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" />
      </form>
    </div>
  );
}
