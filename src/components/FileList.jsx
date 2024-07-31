import React from 'react';
import FileItem from './FileItem';

function FileList({ files, filterFiles }) {
  return (
    <div className="file-list">
      {filterFiles().map((file, index) => (
        <FileItem key={index} file={file} />
      ))}
    </div>
  );
}

export default FileList;
