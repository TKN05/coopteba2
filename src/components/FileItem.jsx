// src/components/FileItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileImage, faFile } from '@fortawesome/free-solid-svg-icons';

function FileItem({ file }) {
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
    <div className="file-item">
      <a href={file.id} target='_blank' className="download-link" rel="noreferrer">
        <FontAwesomeIcon icon={getIcon(file.type)} size="3x" />
        <p>{file.name}</p>
      </a>
    </div>
  );
}

export default FileItem;
