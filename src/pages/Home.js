import React from 'react';
import '../App.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav

function Home() { 
  return (
    <div>
      <h1>Bienvenido a Constructora Esteban Quito</h1>
      <p>Somos una empresa dedicada a la construcción de proyectos de alta calidad.</p>
      <Nav />
      <button>Conócenos</button>
    </div>
  );
}

export default Home;