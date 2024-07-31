// src/components/UploadPage.js
import React, { useState } from 'react';
import UploadActions from './UploadActions';
import FileList from './FileList';
import styles from '../styles/UploadPage.css';
import Nav from '../components/Nav';
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
    
    <><div className={styles.uploadPage}>
      <h1>Sube Documentos</h1>
      <UploadActions
        onFileChange={handleFileChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} />
      <FileList files={files} filterFiles={filterFiles} />
    </div><Nav /></>
  );
}

export default UploadPage;
