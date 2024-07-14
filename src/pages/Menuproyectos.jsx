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
import { Button } from '../components/Button';
import  MapView  from '../components/MapView';


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
    <>
    <main className="container">
      <div> <Nav /></div>
      
      <div className="map-container">
        <MapView /> {/*Si no se ingresa la latitud y la longitud, por defecto aparecerá en la sanma*/}
      </div>

      <div className="box-menu-container">

    
        <Button svg={contratosIcon} buttonName='Contratos'></Button>

        <Button svg={documentosIcon} buttonName='Documentos'></Button>

        <Button svg={facturaIcon} buttonName='Facturas'></Button>

        <Button svg={materialesIcon} buttonName='Materiales'></Button>

        <Button svg={permisosIcon} buttonName='Permisos'></Button>

        <Button svg={planosIcon} buttonName='Planos'></Button>

        <Button svg={serviciosIcon} buttonName='Servicios'></Button>

        <Button svg={sociosIcon} buttonName='Socios'></Button>

      </div>
    </main>
    </>
  );
}

export default Home;
