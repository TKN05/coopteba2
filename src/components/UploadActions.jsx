// src/components/UploadActions.js
import React from 'react';

function UploadActions({ onFileChange, searchTerm, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="upload-actions">
      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={onFileChange} 
        multiple
      />
      <input
        type="text"
        placeholder="Buscar documentos..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
      <select
        value={selectedCategory}
        onChange={onCategoryChange}
        className="category-select"
      >
        <option value="all">Todos</option>
        <option value="images">Imágenes</option>
        <option value="pdfs">PDFs</option>
      </select>
    </div>
  );
}

export default UploadActions;
