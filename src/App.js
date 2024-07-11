// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import SociosPage from './pages/SociosPage';
 import Page1 from './pages/Proyectos';
 import Page2 from './pages/Proyectos';
 import Page3 from './pages/Proyectos';
 import Page4 from './pages/Proyectos';
 import Page5 from './pages/Proyectos';
 import Page6 from './pages/Proyectos';
import './App.css'; // Asegúrate de tener tu archivo CSS para estilos

function App() {
  return (
    <Router>
        {/* Contenido principal */}
        <body className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/SociosPage" element={<SociosPage />} />
            <Route path="/proyectos" element={<Page1 />} />
            <Route path="/proyectos" element={<Page2 />} />
            <Route path="/proyectos" element={<Page3 />} />
            <Route path="/proyectos" element={<Page4 />} />
            <Route path="/proyectos" element={<Page5 />} />
            <Route path="/proyectos" element={<Page6 />} />
          </Routes>
        </body>
    </Router>
  );
}

export default App;
