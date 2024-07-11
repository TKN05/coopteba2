// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importa el archivo CSS de estilos si es necesario
import Nav from '../components/Nav';
// Importa los SVGs necesarios
import contratosIcon from '../assets/svg/Contratos.svg';
import documentosIcon from '../assets/svg/Documentos.svg';
import facturaIcon from '../assets/svg/Factura.svg';
import materialesIcon from '../assets/svg/Materiales.svg';
import permisosIcon from '../assets/svg/Permisos.svg';
import planosIcon from '../assets/svg/Planos.svg';
import serviciosIcon from '../assets/svg/Servicios.svg';
import sociosIcon from '../assets/svg/Socios.svg';

// Componente funcional que representa un ícono SVG
const Icon = ({ icon }) => {
  return <img src={icon} alt="Icono" />;
};

function Home() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };
  
  return (
    
    <div className="boxes-container">
      <div> <Nav /></div>
      <div className="box" onClick={() => handleRedirect('/contratos')}>
        <Icon icon={contratosIcon} /> Contratos
      </div>
      <div className="box" onClick={() => handleRedirect('/documentos')}>
        <Icon icon={documentosIcon} /> Documentos
      </div>
      <div className="box" onClick={() => handleRedirect('/factura')}>
        <Icon icon={facturaIcon} /> Factura
      </div>
      <div className="box" onClick={() => handleRedirect('/materiales')}>
        <Icon icon={materialesIcon} /> Materiales
      </div>
      <div className="box" onClick={() => handleRedirect('/permisos')}>
        <Icon icon={permisosIcon} /> Permisos
      </div>
      <div className="box" onClick={() => handleRedirect('/planos')}>
        <Icon icon={planosIcon} /> Planos
      </div>
      <div className="box" onClick={() => handleRedirect('/servicios')}>
        <Icon icon={serviciosIcon} /> Servicios
      </div>
      <div className="box" onClick={() => handleRedirect('/socios')}>
        <Icon icon={sociosIcon} /> Socios
      </div>
    </div>
  );
}

export default Home;
