import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS de estilos si es necesario
import Nav from '../components/Nav';

function SociosPage() {
  const [busqueda, setBusqueda] = useState('');
  const [socios, setSocios] = useState([
    { numero: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', telefono: '123456789', miembrosGrupo: 3 },
    { numero: 2, nombre: 'María', apellido: 'García', dni: '87654321', telefono: '987654321', miembrosGrupo: 2 },
    { numero: 3, nombre: 'Pedro', apellido: 'López', dni: '23456789', telefono: '234567890', miembrosGrupo: 4 },
    { numero: 4, nombre: 'Ana', apellido: 'Martínez', dni: '34567890', telefono: '345678901', miembrosGrupo: 1 },
    { numero: 5, nombre: 'Luis', apellido: 'Rodríguez', dni: '45678901', telefono: '456789012', miembrosGrupo: 3 },
    { numero: 6, nombre: 'Elena', apellido: 'Sánchez', dni: '56789012', telefono: '567890123', miembrosGrupo: 2 },
    { numero: 7, nombre: 'Carlos', apellido: 'Gómez', dni: '67890123', telefono: '678901234', miembrosGrupo: 4 },
    { numero: 8, nombre: 'Lucía', apellido: 'Díaz', dni: '78901234', telefono: '789012345', miembrosGrupo: 1 },
    { numero: 9, nombre: 'Miguel', apellido: 'Fernández', dni: '89012345', telefono: '890123456', miembrosGrupo: 3 },
    { numero: 10, nombre: 'Sofía', apellido: 'Ramírez', dni: '90123456', telefono: '901234567', miembrosGrupo: 2 }
]);

  const [nuevoSocio, setNuevoSocio] = useState({ numero: '', nombre: '', apellido: '', dni: '', telefono: '', miembrosGrupo: '' });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [socioSeleccionado, setSocioSeleccionado] = useState(null);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const camposSocio = ['numero', 'nombre', 'apellido', 'dni', 'telefono', 'miembrosGrupo'];

  const handleBuscar = (e) => {
    setBusqueda(e.target.value);
  };

  const filtrarSocios = (socio) => {
    return camposSocio.some((campo) =>
      socio[campo].toString().toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  const sociosFiltrados = socios.filter(filtrarSocios);

  const handleSeleccionarSocio = (socio) => {
    setSocioSeleccionado(socio);
    setMostrarOpciones(true);
  };

  const handleModificar = () => {
    if (socioSeleccionado) {
      console.log('Modificar', socioSeleccionado);
      // Aquí puedes agregar la lógica para modificar el socio
    }
    setMostrarOpciones(false);
  };

  const handleEliminar = () => {
    if (socioSeleccionado) {
      setSocios(socios.filter(s => s !== socioSeleccionado));
      console.log('Eliminar', socioSeleccionado);
    }
    setMostrarOpciones(false);
  };

  const handleAgregarSocio = () => {
    setSocios([...socios, { ...nuevoSocio, numero: socios.length + 1 }]);
    setNuevoSocio({ numero: '', nombre: '', apellido: '', dni: '', telefono: '', miembrosGrupo: '' });
    setMostrarFormulario(false);
  };

  return (
    <div className="table-container">
      <h2>Campos de Socio</h2>
      <section className='busqueda-section'>
      <input 
        type="text"
        placeholder="Buscar socio..."
        value={busqueda}
        onChange={handleBuscar}
      />
      </section>
      
      <table className="table">
        <Nav />
        <thead>
          <tr>
            {camposSocio.map((campo, index) => (
              <th key={index}>{campo.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sociosFiltrados.map((socio, index) => (
            <tr key={index} onClick={() => handleSeleccionarSocio(socio)}>
              {camposSocio.map((campo) => (
                <td key={campo}>{socio[campo]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

     
      <div>
      <button onClick={() => setMostrarFormulario(true)}>Agregar Socio</button>

{mostrarFormulario && (
  <div className="proyecto-form">
    <h3>Agregar Nuevo Socio</h3>
    {camposSocio.map((campo) => (
      <div key={campo}>
        <label>{campo.toUpperCase()}:</label>
        <input 
          type="text" 
          value={nuevoSocio[campo]} 
          onChange={(e) => setNuevoSocio({ ...nuevoSocio, [campo]: e.target.value })}
        />
      </div>
    ))}
    <button onClick={handleAgregarSocio}>Guardar</button>
    <button onClick={() => setMostrarFormulario(false)}>Cancelar</button>
  </div>
)}

    </div>

      {mostrarOpciones && (
        <div className="opciones-container">
          <h3>Opciones para {socioSeleccionado.nombre} {socioSeleccionado.apellido}</h3>
          <button onClick={handleModificar}>Modificar</button>
          <button onClick={handleEliminar}>Eliminar</button>
        </div>
      )}
    </div>
  );
}

export default SociosPage;
