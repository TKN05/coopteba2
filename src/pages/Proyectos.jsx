import React, { useState } from 'react';
import '../App.css'; // Asegúrate de tener tu archivo CSS para estilos
import Nav from '../components/Nav'; // Importamos el componente Nav
import Formulario from '../components/Formulario';
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
  const navigate = useNavigate(); // Hook para navegación

const camposProyecto = [
  {name:"nombre", label:"Nombre", type:"text"},
  {name:"localidad", label:"Localidad", type:"text"},
  {name:"estado", label:"Estado", type:"select", options:["En Progreso", "Completado", "Sin Edificar"]},
];
  // Función para manejar el cambio en el filtro
  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };

  // Función para manejar el cambio en los datos del formulario
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // Función para mostrar/ocultar el formulario
  const toggleForm = () => {
    setShowForm(!showForm);
    setFormData({ nombre: '', localidad: '', estado: 'En progreso' });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
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
              <Formulario
                fields={camposProyecto}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                toggleForm={toggleForm}
              ></Formulario>
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
        </section>
      </div>
    </div>
  );
}

export default Proyectos;
