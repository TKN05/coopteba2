// src/pages/Proyectos.js
import React, { useState } from 'react';
import '../styles/card.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav
import CardComponent from '../components/CardComponent';
import plus from '../assets/svg/SVGPRO/plus.svg';

const proyectosEjemplo = [
  {
    id: 1,
    nombre: 'Proyecto 1',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto1'
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    estado: 'Completado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto2'
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto3'
  },
  {
    id: 4,
    nombre: 'Proyecto 4',
    estado: 'Terminado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto4'
  },
  {
    id: 5,
    nombre: 'Proyecto 5',
    estado: 'Sin edificar',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto5'
  },
  {
    id: 6,
    nombre: 'Proyecto 6',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto6'
  },
  {
    id: 7,
    nombre: 'Proyecto 7',
    estado: 'Terminado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto7'
  },
  {
    id: 8,
    nombre: 'Proyecto 8',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto8'
  },
  {
    id: 9,
    nombre: 'Proyecto 9',
    estado: 'Completado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto9'
  },
  {
    id: 10,
    nombre: 'Proyecto 10',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto10'
  },
  {
    id: 11,
    nombre: 'Proyecto 11',
    estado: 'Sin edificar',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto11'
  },
  {
    id: 12,
    nombre: 'Proyecto 12',
    estado: 'Terminado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto12'
  },
  {
    id: 13,
    nombre: 'Proyecto 13',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto13'
  },
  {
    id: 14,
    nombre: 'Proyecto 14',
    estado: 'Completado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto14'
  },
  {
    id: 15,
    nombre: 'Proyecto 15',
    estado: 'En progreso',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto15'
  },
  {
    id: 16,
    nombre: 'Proyecto 16',
    estado: 'Terminado',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto16'
  },
  {
    id: 17,
    nombre: 'Proyecto 17',
    estado: 'Sin edificar',
    imagen: 'https://via.placeholder.com/150',
    direccion: 'https://ejemplo.com/proyecto17'
  }
  // Agrega más proyectos según sea necesario
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState('todos'); // Estado para el filtro
  const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar formulario
  const [formData, setFormData] = useState({ nombre: '', localidad: '', estado: 'En progreso' }); // Estado para los datos del formulario
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el mensaje de confirmación

  // Función para manejar el cambio en el filtro
  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  // Función para manejar el cambio en la barra de búsqueda
  const handleChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
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

  return (
    <main className="container">
      {/* Componente Nav */}
      <header>
        <Nav />
      </header>
      
      <main className="main-content">
        {/* Sección de Búsqueda */}
        <section className="busqueda-section">
          <input type="text" value={busqueda} onChange={handleChangeBusqueda} placeholder="Buscar proyectos..." />
        </section>

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
              <CardComponent
                key={proyecto.id}
                title={proyecto.nombre}
                description={proyecto.estado}
                imageUrl={proyecto.imagen}
                direccion={proyecto.direccion}
              />
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}

export default Proyectos;
