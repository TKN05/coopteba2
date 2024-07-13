import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom
import App from './App';
import './styles/global.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);