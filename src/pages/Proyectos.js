import React, { useState } from 'react';
import '../App.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav

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
  // Agrega más proyectos según sea necesario
];

const App = () => {
  const [filtro, setFiltro] = useState('todos'); // Estado para el filtro
  const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda

  // Función para manejar el cambio en el filtro
  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  // Función para manejar el cambio en la barra de búsqueda
  const handleChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
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
    <div className="container">
      {/* Componente Nav */}
      <Nav />

      {/* Contenido principal */}
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
          </select>
        </section>

        {/* Sección de Proyectos */}
        <section id="proyectos" className="proyectos-section">
         
          <div className="proyectos-container">
            {proyectosFiltrados.map(proyecto => (
              <div key={proyecto.id} className="proyecto-box">
                <div className="proyecto">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.estado}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
