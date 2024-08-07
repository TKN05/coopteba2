import React, { useState } from 'react';
import '../App.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav
import FiltroProy from '../components/FiltroProy';

// Datos de ejemplo
const proyectosEjemplo = [
  { id: 1, nombre: 'Proyecto 1', estado: 'En progreso', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  { id: 2, nombre: 'Proyecto 2', estado: 'Completado', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  { id: 3, nombre: 'Proyecto 3', estado: 'En progreso', imagen: 'https://via.placeholder.com/150', direccion: 'http://localhost:3000/Menuproyectos' },
  // Añade más proyectos aquí
];

const Proyectos = () => {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar formulario
  const [formData, setFormData] = useState({ nombre: '', localidad: '', estado: 'En progreso' }); // Estado para los datos del formulario
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el mensaje de confirmación

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
    setFormData({ nombre: '', localidad: '', estado: 'En progreso' });
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

  return (
    <div className="container">
      {/* Componente Nav */}
      <header>
        <Nav />
      </header>

      <div className="contenedor-proyectos">
        <section id="proyectos" className="proyectos-section">
          <FiltroProy proyectos={proyectosEjemplo} onToggleForm={toggleForm} />

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
                <button type="button" className='save-btn' onClick={handleEnviar}>+ Enviar</button>
                <button type="button" className='close-btn' onClick={toggleForm}>- Cancelar</button>
              </form>
            </div>
          )}

          {showConfirmation && (
            <div className="confirmation">
              <p>Proyecto enviado con éxito</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Proyectos;
