import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileImage, faFile } from '@fortawesome/free-solid-svg-icons';
import './UploadPage.css';

function UploadPage() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map(file => ({
      id: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
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

  return (
    <div className="upload-page">
      <h1>Sube Documentos</h1>
      <input 
        type="file" 
        accept="image/*,application/pdf" 
        onChange={handleFileChange} 
        multiple
      />
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <FontAwesomeIcon icon={getIcon(file.type)} size="3x" />
            <p>{file.name}</p>
            {file.type.startsWith('image') && (
              <img src={file.id} alt={file.name} className="file-preview" />
            )}
            <a href={file.id} download={file.name} className="download-link">
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPage;
