// src/components/Card.js
import React, { useState } from 'react';
import axios from 'axios';
import plus from '../assets/svg/SVGPRO/plus.svg';

const Card = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
      e.dataTransfer.clearData();
    }
  };

  const handleFiles = (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('File uploaded successfully', response.data);
      // Aquí puedes manejar la respuesta del servidor como necesites
    })
    .catch(error => {
      console.error('Error uploading file', error);
    });
  };

  return (
    <div
      className={`card ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={plus} alt="Administración" />
      <h2>Agregar Proyecto</h2>
      {isDragging && <p>Suelta el archivo aquí</p>}
    </div>
  );
};

export default Card;
