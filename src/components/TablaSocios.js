import React, { useState } from 'react';
import '../App.css';
const TablaSocios = ({ socios, onModificar, onEliminar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBuscar = (e) => {
    setBusqueda(e.target.value);
  };

  const filteredSocios = socios.filter((socio) =>
    `${socio.numero} ${socio.nombre} ${socio.apellido}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="busqueda-section">
      <input
        type="text"
        value={busqueda}
        onChange={handleBuscar}
        placeholder="Buscar socio..."
        
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Número de Socio</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Número de Teléfono</th>
            <th>Número de Miembros del Grupo Familiar</th>
           
          </tr>
        </thead>
        <tbody>
          {filteredSocios.map((socio) => (
            <tr key={socio.numero}>
              <td>{socio.numero}</td>
              <td>{socio.nombre}</td>
              <td>{socio.apellido}</td>
              <td>{socio.dni}</td>
              <td>{socio.telefono}</td>
              <td>{socio.miembrosGrupo}</td>
              <td>
                <button onClick={() => onModificar(socio)}>Modificar</button>
                <button onClick={() => onEliminar(socio)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaSocios;
