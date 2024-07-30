import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileImage, faFile } from '@fortawesome/free-solid-svg-icons';
import './UploadPage.css';

function UploadPage() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map(file => ({
      id: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getIcon = (fileType) => {
    if (fileType.startsWith('image')) {
      return faFileImage;
    } else if (fileType === 'application/pdf') {
      return faFilePdf;
    } else {
      return faFile;
    }
  };

  const filterFiles = () => {
    return files.filter(file => {
      const matchesSearchTerm = file.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'images' && file.type.startsWith('image')) ||
        (selectedCategory === 'pdfs' && file.type === 'application/pdf');
      return matchesSearchTerm && matchesCategory;
    });
  };

  return (
    <div className="upload-page">
      <h1>Sube Documentos</h1>
      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={handleFileChange} 
        multiple
      />
      <input
        type="text"
        placeholder="Buscar documentos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-select"
      >
        <option value="all">Todos</option>
        <option value="images">Imágenes</option>
        <option value="pdfs">PDFs</option>
      </select>
      <div className="file-list">
        {filterFiles().map((file, index) => (
          <div key={index} className="file-item"> 
           <a href={file.id} download={file.name} className="download-link">
            <FontAwesomeIcon icon={getIcon(file.type)} size="3x" />
            <p>{file.name}</p>
          
             
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPage;
