import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, category });
  };
  
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Search medications..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-dropdown"
          >
            <option value="">All Categories</option>
            <option value="Cardiovascular Medications">Cardiovascular</option>
            <option value="Respiratory Medications">Respiratory</option>
            <option value="Antibiotics">Antibiotics</option>
            <option value="Analgesics">Analgesics</option>
            <option value="Vitamins">Vitamins</option>
            <option value="Gastrointestinal">Gastrointestinal</option>
            <option value="Endocrine">Endocrine</option>
            <option value="Antifungal">Antifungal</option>
            <option value="Cough & Cold">Cough & Cold</option>
            <option value="Hypertension">Hypertension</option>
          </select>
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;