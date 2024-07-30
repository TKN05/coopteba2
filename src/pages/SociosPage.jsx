import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS de estilos si es necesario
import Nav from '../components/Nav';

function SociosPage() {
  const [busqueda, setBusqueda] = useState('');
  const [socios, setSocios] = useState([
    { numero: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', telefono: '123456789', miembrosGrupo: 3 },
    { numero: 2, nombre: 'María', apellido: 'García', dni: '87654321', telefono: '987654321', miembrosGrupo: 2 },
    // Agrega más objetos según sea necesario
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

      <button onClick={() => setMostrarFormulario(true)}>Agregar Socio</button>

      {mostrarFormulario && (
        <div className="formulario-container">
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
