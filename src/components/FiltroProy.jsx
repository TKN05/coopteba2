import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Busqueda from './Busqueda';
import plus from '../assets/svg/SVGPRO/plus.svg';

function FiltroProy({ proyectos, onToggleForm }) {
  const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda
  const [filtro, setFiltro] = useState('todos'); // Estado para el filtro
  const navigate = useNavigate(); // Hook para navegación

  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const handleSearchChange = (searchTerm) => {
    setBusqueda(searchTerm);
  };

  const handleProyectoClick = (id) => {
    navigate(`/proyecto/${id}`);
  };

  const proyectosFiltrados = proyectos.filter(proyecto => {
    if (filtro === 'todos' || proyecto.estado === filtro) {
      return true;
    }
    return false;
  }).filter(proyecto => {
    return proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <>
      <Busqueda placeHolder='Buscar proyectos...' onSearchChange={handleSearchChange} />

      <section className="filtro-section">
        <select value={filtro} onChange={handleChangeFiltro}>
          <option value="todos">Todos</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
          <option value="Sin edificar">Sin edificar</option>
        </select>
      </section>

      <div className='proyectos-container'>
        <div className='card' onClick={onToggleForm}>
          <img src={plus} alt="Agregar Proyecto" />
          <h2>Agregar Proyecto</h2>
        </div>
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
    </>
  );
}

export default FiltroProy;
