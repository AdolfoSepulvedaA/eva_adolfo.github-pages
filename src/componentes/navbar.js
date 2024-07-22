import React from 'react';
import logo from './img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo de la página" width="150px" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#registro" id="registroLink">Registro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login" id="loginLink">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#perfil" id="perfilLink" style={{ display: 'none' }}>Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quienes-somos" id="quienesSomosLink">Quienes somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#artistas" id="artistasLink">Artistas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ranking" id="rankingLink">Ranking</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
