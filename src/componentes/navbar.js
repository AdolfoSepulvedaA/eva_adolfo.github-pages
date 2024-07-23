// src/componentes/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('currentUser');

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo de la página" width="150px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/registro">Registro</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/perfil">Perfil</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/quienessomos">Quienes somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cantantes">Artistas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ranking">Ranking</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
