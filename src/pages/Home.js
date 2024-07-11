// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav'; // Importa el componente Nav
import '../App.css'; // Importa el archivo CSS de estilos si es necesario

function Home() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };
  
  return (
    <div>
      <Nav /> {/* Aquí se añade el componente Nav */}
      <div className="boxes-container">
        <div className="box" onClick={() => handleRedirect('/page1')}>Page 1</div>
        <div className="box" onClick={() => handleRedirect('/page2')}>Page 2</div>
        <div className="box" onClick={() => handleRedirect('/page3')}>Page 3</div>
        <div className="box" onClick={() => handleRedirect('/page4')}>Page 4</div>
        <div className="box" onClick={() => handleRedirect('/page5')}>Page 5</div>
        <div className="box" onClick={() => handleRedirect('/page6')}>Page 6</div>
        <div className="box" onClick={() => handleRedirect('/page7')}>Page 7</div>
        <div className="box" onClick={() => handleRedirect('/page8')}>Page 8</div>
      </div>
    </div>
  );
}

export default Home;
