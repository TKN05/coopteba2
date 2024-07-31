// src/pages/Proyectos.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav
import plus from '../assets/svg/SVGPRO/plus.svg';
import Busqueda from '../components/Busqueda';

// Datos de ejemplo
const proyectosEjemplo = [
  { id: 1, nombre: 'Proyecto 1', estado: 'En progreso', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  { id: 2, nombre: 'Proyecto 2', estado: 'Completado', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  { id: 3, nombre: 'Proyecto 3', estado: 'En progreso', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  // Añade más proyectos aquí
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState('todos'); // Estado para el filtro
  const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar formulario
  const [formData, setFormData] = useState({ nombre: '', localidad: '', estado: 'En progreso' }); // Estado para los datos del formulario
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el mensaje de confirmación
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar el cambio en el filtro
  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  // Función para manejar el cambio en los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Función para mostrar/ocultar el formulario
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Función para manejar la búsqueda
  const handleSearchChange = (searchTerm) => {
    setBusqueda(searchTerm);
  };

  // Función para manejar el envío del formulario
  const handleEnviar = () => {
    setShowConfirmation(true); // Mostrar el mensaje de confirmación
    setTimeout(() => {
      setShowConfirmation(false); // Ocultar el mensaje después de 2 segundos
      setShowForm(false); // Ocultar el formulario
      setFormData({ nombre: '', localidad: '', estado: 'En progreso' }); // Limpiar el formulario
    }, 2000);
  };

  // Filtrar proyectos según el estado seleccionado y la búsqueda
  const proyectosFiltrados = proyectosEjemplo.filter(proyecto => {
    if (filtro === 'todos' || proyecto.estado === filtro) {
      return true;
    }
    return false;
  }).filter(proyecto => {
    return proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  // Función para manejar el clic en un proyecto
  const handleProyectoClick = (id) => {
    navigate(`/proyecto/${id}`);
  };

  return (
    <main className="container">
      {/* Componente Nav */}
      <header>
        <Nav />
      </header>

      <main className="contenedor-proyectos">
        {/* Sección de Búsqueda */}
        <Busqueda placeHolder='Buscar proyectos...' onSearchChange={handleSearchChange} />

        {/* Sección de Filtro */}
        <section className="filtro-section">
          <select value={filtro} onChange={handleChangeFiltro}>
            <option value="todos">Todos</option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
            <option value="Sin edificar">Sin edificar</option>
          </select>
        </section>

        {/* Sección de Proyectos */}
        <section id="proyectos" className="proyectos-section">
          <div className="proyectos-container">
            <div className='card' onClick={toggleForm}>
              <img src={plus} alt="Agregar Proyecto" />
              <h2>Agregar Proyecto</h2>
            </div>
            {showForm && (
              <div className="modal">
                <form className="proyecto-form">
                  <div>
                    <label htmlFor="nombre">Nombre del Proyecto:</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="localidad">Localidad:</label>
                    <input
                      type="text"
                      id="localidad"
                      name="localidad"
                      value={formData.localidad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="estado">Estado del Proyecto:</label>
                    <select
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      required
                    >
                      <option value="En progreso">En progreso</option>
                      <option value="Terminado">Terminado</option>
                      <option value="Sin edificar">Sin edificar</option>
                    </select>
                  </div>
                  <button type="button" onClick={handleEnviar}>Enviar</button>
                </form>
              </div>
            )}
            {showConfirmation && (
              <div className="confirmation">
                <p>Proyecto enviado con éxito</p>
              </div>
            )}
            {proyectosFiltrados.map(proyecto => (
              <div
                key={proyecto.id}
                className="card"
                onClick={() => handleProyectoClick(proyecto.id)}
              >
                <img src={proyecto.imagen} alt={proyecto.nombre} />
                <h2>{proyecto.nombre}</h2>
                <p>{proyecto.estado}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}

export default Proyectos;
