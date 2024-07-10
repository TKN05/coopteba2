import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS de estilos si es necesario
import Nav from '../components/Nav';
function SociosPage() {
  const [busqueda, setBusqueda] = useState('');

  // Definir los nombres de los campos que quieres mostrar
  const camposSocio = ['numero', 'nombre', 'apellido', 'dni', 'telefono', 'miembrosGrupo'];

  // Datos de ejemplo (puedes cargarlos desde una API o donde sea necesario)
  const sociosData = [
    { numero: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', telefono: '123456789', miembrosGrupo: 3 },
    { numero: 2, nombre: 'María', apellido: 'García', dni: '87654321', telefono: '987654321', miembrosGrupo: 2 },
    // Agrega más objetos según sea necesario
  ];

  // Filtrar datos según el término de búsqueda
  const filtrarSocios = (socio) => {
    return camposSocio.some((campo) =>
      socio[campo].toString().toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const sociosFiltrados = sociosData.filter(filtrarSocios);

  return (
    
    <div className="table-container">
      <h2>Campos de Socio</h2>
      <input 
        type="text"
        placeholder="Buscar socio..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <table className="table">
      <Nav />
        <thead>
          <tr>
            {camposSocio.map((campo, index) => (
              <th key={index}>{campo}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sociosFiltrados.map((socio, index) => (
            <tr key={index}>
              {camposSocio.map((campo) => (
                <td key={campo}>{socio[campo]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SociosPage;
