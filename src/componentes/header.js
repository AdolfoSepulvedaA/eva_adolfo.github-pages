// src/componentes/header.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import './header.css';

function Header() {
  const { loggedIn, currentUser, handleLogout } = useAuth();

  return (
    <header>
      <div className="header-right">
        {loggedIn && currentUser ? (
          <>
            <span id="userNameDisplay">Hola, {currentUser.nombre}</span>
            <button
              id="logoutLink"
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', color: '#fbc503', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Logout
            </button>
          </>
        ) : (
          <span id="userNameDisplay"></span>
        )}
      </div>
    </header>
  );
}

export default Header;
