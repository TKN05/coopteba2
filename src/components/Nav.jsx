// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import Home from '../assets/svg/SVGPRO/home.svg';
import Books from '../assets/svg/SVGPRO/books.svg';
import Crane from '../assets/svg/SVGPRO/crane.svg';
import Graph from '../assets/svg/SVGPRO/graph.svg';
import Group from '../assets/svg/SVGPRO/group.svg';
import User from '../assets/svg/SVGPRO/user.svg';

const Nav = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <nav 
      className={`menu-container ${expanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-item">
        <Link to="/" className="menu-link">
          <div className="icon"><img src={Home} alt="Home" /></div>
          <div className="menu-text">Inicio</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/Proyectos" className="menu-link">
          <div className="icon"><img src={Crane} alt="Tierra y obras" /></div>
          <div className="menu-text">Tierra y obras</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/administracion" className="menu-link">
          <div className="icon"><img src={Books} alt="Administración" /></div>
          <div className="menu-text">Administración</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/finanzas" className="menu-link">
          <div className="icon"><img src={Graph} alt="Finanzas" /></div>
          <div className="menu-text">Finanzas</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/SociosPage" className="menu-link">
          <div className="icon"><img src={Group} alt="Socios" /></div>
          <div className="menu-text">Socios</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/perfiles" className="menu-link">
          <div className="icon"><img src={User} alt="Perfiles" /></div>
          <div className="menu-text">Perfiles</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
