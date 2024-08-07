// src/components/TablaSocios.js
import React, { useState } from 'react';
import '../styles/Tabla-socios.css'; // Asegúrate de tener un archivo de estilos

const TablaSocios = ({ socios, onModificar, onEliminar }) => {
<<<<<<< HEAD
  const [editRow, setEditRow] = useState(null);
  const [editableData, setEditableData] = useState({});
  const [sociosSeleccionados, setSociosSeleccionados] = useState([]);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
=======
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
>>>>>>> ae32af311fce61e6e865c2f8de68998d17f528de

  const handleDoubleClick = (socio, key) => {
    setEditRow({ numero: socio.numero, key });
    setEditableData({ ...socio });
  };

  const handleChange = (e, key) => {
    setEditableData({ ...editableData, [key]: e.target.value });
  };

  const handleBlur = () => {
    if (editRow) {
      onModificar(editableData);
      setEditRow(null);
      setEditableData({});
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  const handleSeleccionarSocio = (socioNumero) => {
    setSociosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.includes(socioNumero)
        ? prevSeleccionados.filter(numero => numero !== socioNumero)
        : [...prevSeleccionados, socioNumero]
    );
  };

  const handleEliminarSeleccionados = () => {
    setMostrarConfirmacion(true);
  };

  const handleConfirmarEliminacion = () => {
    sociosSeleccionados.forEach(numero => {
      onEliminar({ numero });
    });
    setSociosSeleccionados([]);
    setMostrarConfirmacion(false);
  };

  const handleCancelarEliminacion = () => {
    setMostrarConfirmacion(false);
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Seleccionar</th>
              <th>Número</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Miembros del Grupo</th>
            </tr>
          </thead>
          <tbody>
            {socios.map((socio) => (
              <tr key={socio.numero}>
                <td>
                  <input
                    type="checkbox"
                    checked={sociosSeleccionados.includes(socio.numero)}
                    onChange={() => handleSeleccionarSocio(socio.numero)}
                  />
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'numero')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'numero' ? (
                    <input
                      type="text"
                      value={editableData.numero}
                      onChange={(e) => handleChange(e, 'numero')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.numero
                  )}
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'nombre')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'nombre' ? (
                    <input
                      type="text"
                      value={editableData.nombre}
                      onChange={(e) => handleChange(e, 'nombre')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.nombre
                  )}
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'apellido')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'apellido' ? (
                    <input
                      type="text"
                      value={editableData.apellido}
                      onChange={(e) => handleChange(e, 'apellido')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.apellido
                  )}
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'dni')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'dni' ? (
                    <input
                      type="text"
                      value={editableData.dni}
                      onChange={(e) => handleChange(e, 'dni')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.dni
                  )}
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'telefono')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'telefono' ? (
                    <input
                      type="text"
                      value={editableData.telefono}
                      onChange={(e) => handleChange(e, 'telefono')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.telefono
                  )}
                </td>
                <td
                  onDoubleClick={() => handleDoubleClick(socio, 'miembrosGrupo')}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                >
                  {editRow?.numero === socio.numero && editRow?.key === 'miembrosGrupo' ? (
                    <input
                      type="text"
                      value={editableData.miembrosGrupo}
                      onChange={(e) => handleChange(e, 'miembrosGrupo')}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  ) : (
                    socio.miembrosGrupo
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="remove-button-container">
        <button
          className="remove-button"
          onClick={handleEliminarSeleccionados}
          disabled={sociosSeleccionados.length === 0}
        >
          Eliminar Seleccionados
        </button>
      </div>

      {mostrarConfirmacion && (
        <div className="confirmation-container">
          <p>¿Estás seguro de que deseas eliminar los socios seleccionados?</p>
          <button className="remove-button" onClick={handleConfirmarEliminacion}>
            Confirmar Eliminación
          </button>
          <button className="cancel-button" onClick={handleCancelarEliminacion}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

export default TablaSocios;
