import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS de estilos si es necesario
import Nav from '../components/Nav';
import Busqueda from '../components/Busqueda';
import TablaSocios from '../components/TablaSocios';
import Formulario from '../components/Formulario';

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
    { numero: 10, nombre: 'Sofía', apellido: 'Ramírez', dni: '90123456', telefono: '901234567', miembrosGrupo: 2 },
    { numero: 11, nombre: 'Pedro', apellido: 'López', dni: '23456789', telefono: '234567890', miembrosGrupo: 4 },
    { numero: 12, nombre: 'Ana', apellido: 'Martínez', dni: '34567890', telefono: '345678901', miembrosGrupo: 1 },
    { numero: 13, nombre: 'Luis', apellido: 'Rodríguez', dni: '45678901', telefono: '456789012', miembrosGrupo: 3 },
    { numero: 14, nombre: 'Elena', apellido: 'Sánchez', dni: '56789012', telefono: '567890123', miembrosGrupo: 2 },
    { numero: 15, nombre: 'Carlos', apellido: 'Gómez', dni: '67890123', telefono: '678901234', miembrosGrupo: 4 },
    { numero: 16, nombre: 'Lucía', apellido: 'Díaz', dni: '78901234', telefono: '789012345', miembrosGrupo: 1 },
    { numero: 17, nombre: 'Miguel', apellido: 'Fernández', dni: '89012345', telefono: '890123456', miembrosGrupo: 3 },
    { numero: 18, nombre: 'Sofía', apellido: 'Ramírez', dni: '90123456', telefono: '901234567', miembrosGrupo: 2 }

  ]);

  const [nuevoSocio, setNuevoSocio] = useState({ numero: '', nombre: '', apellido: '', dni: '', telefono: '', miembrosGrupo: '' });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [socioSeleccionado, setSocioSeleccionado] = useState(null);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const camposSocio = [
    {name:"numero", label:'Numero', type:"text"},
    {name:"nombre", label:'Nombre', type:"text"}, 
    {name:"apellido", label:'Apellido', type:"text"}, 
    {name:"dni", label:'DNI', type:"text"}, 
    {name:"telefono", label:'Telefono', type:"text"}, 
    {name:"miembrosGrupo", label:'N° de Miembros', type:"text"},  
];

  const handleSearchChange = (searchTerm) => {
    setBusqueda(searchTerm);
  };

  const toggleForm = () => {
    setMostrarFormulario(!mostrarFormulario);
    setNuevoSocio({ numero: '', nombre: '', apellido: '', dni: '', telefono: '', miembrosGrupo: '' });

  }
  const filtrarSocios = (socio) => {
    return Object.values(socio).some((valor) =>
      valor.toString().toLowerCase().includes(busqueda.toLowerCase())
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
      setSocios(socios.filter(s => s.numero !== socioSeleccionado.numero));
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
    <>
      <Nav />
      <div className="container">
        <h2>Campos de Socio</h2>
        <section className='busqueda-section'>
          <Busqueda placeHolder='Buscar socios...' onSearchChange={handleSearchChange} />
        </section>

        <TablaSocios socios={sociosFiltrados} onModificar={handleSeleccionarSocio} onEliminar={handleEliminar} />

        <div>
          <button className='save-btn' onClick={toggleForm}>+ Agregar Socio</button>

          {mostrarFormulario && (
            <Formulario
              fields={camposSocio}
              formData={nuevoSocio}
              setFormData={setNuevoSocio}
              onSubmit={handleAgregarSocio}
              toggleForm={toggleForm}
            ></Formulario>
          )}

          {mostrarOpciones && socioSeleccionado && (
            <div className="opciones-container">
              <h3>Opciones para {socioSeleccionado.nombre} {socioSeleccionado.apellido}</h3>
              <button onClick={handleModificar}>Modificar</button>
              <button onClick={handleEliminar}>Eliminar</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SociosPage;
