import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Proyectos';
import Proyectos from './pages/Proyectos';
import Socios from './pages/SociosPage';
import Menuproyectos from './pages/Menuproyectos';
import Page1 from './pages/Proyectos';
import Page2 from './pages/Proyectos';
import Page3 from './pages/Proyectos';
import Page4 from './pages/Proyectos';
import Page5 from './pages/Proyectos';
import Page6 from './pages/Proyectos';
import UploadPage from './components/UploadPage';
import './App.css'; // Asegúrate de tener tu archivo CSS para estilos

function App() {
  return (
    <Router>
      {/* Contenido principal */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/socios" element={<Socios/>} />
          <Route path="/Menuproyectos" element={<Menuproyectos/>} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/Planos" element={<UploadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
