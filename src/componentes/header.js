import React from 'react';

function Header() {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <header>
      <div id="userDisplay">
        <span id="userNameDisplay"></span>
        <button id="logoutLink" onClick={handleLogout} style={{ display: 'none', background: 'none', border: 'none', color: '#fbc503', textDecoration: 'underline', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
