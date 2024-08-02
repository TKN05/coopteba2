import React from 'react';
import '../App.css';

const TablaSocios = ({ socios, onModificar, onEliminar }) => {
  return (
    <div className="table-container">
      <table className='table'>
        <thead>
          <tr>
            <th>Número de Socio</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Número de Teléfono</th>
            <th>Número de Miembros del Grupo Familiar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {socios.map((socio) => (
            <tr key={socio.numero}>
              <td>{socio.numero}</td>
              <td>{socio.nombre}</td>
              <td>{socio.apellido}</td>
              <td>{socio.dni}</td>
              <td>{socio.telefono}</td>
              <td>{socio.miembrosGrupo}</td>
              <td>
                <button className='modify-btn' onClick={() => onModificar(socio)}>Modificar</button>
                <button className='close-btn' onClick={() => onEliminar(socio)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TablaSocios;
