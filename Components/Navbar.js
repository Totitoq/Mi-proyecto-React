import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Mi Tienda</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/bebidas" className="nav-link">Bebidas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
