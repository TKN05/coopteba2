import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import EjemploProyecto from './pages/Proyectos';
import Header from './components/Header';
import './App.css'; // Asegúrate de tener tu archivo CSS para estilos

function App() {
  return (
    <Router>
      <div className="app-container">
        
        
        {/* Contenido principal */}
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/ejemplo-proyecto" element={<EjemploProyecto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
