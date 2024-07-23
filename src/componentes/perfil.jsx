import React, { useState, useEffect } from 'react';
import './perfil.css'; // Asegúrate de crear también el archivo CSS para los estilos

function Perfil() {
  const [user, setUser] = useState({
    rut: '',
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    fechaRegistro: ''
  });

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    setUser(currentUser);
    setFormData({
      nombre: currentUser.nombre || '',
      apellidos: currentUser.apellidos || '',
      email: currentUser.email || '',
      password: ''
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get current user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    
    // Check if the email is already used by another user
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === formData.email && user.email !== currentUser.email);

    if (existingUser) {
      setMessage('El correo electrónico ya está en uso.');
      return;
    }

    // Update user data with non-empty fields only
    const updatedUser = {
      ...currentUser,
      nombre: formData.nombre || currentUser.nombre,
      apellidos: formData.apellidos || currentUser.apellidos,
      email: formData.email || currentUser.email,
      password: formData.password || currentUser.password
    };

    // Save updated user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    // Update users list with new user data
    const updatedUsersList = users.map(user => user.email === currentUser.email ? updatedUser : user);
    localStorage.setItem('users', JSON.stringify(updatedUsersList));
    setUser(updatedUser);
    setMessage('Datos actualizados correctamente');
  };

  return (
    <div className="perfil-container">
      <h1>Perfil de Usuario</h1>
      <div className="perfil-info">
        <p><strong>RUT:</strong> {user.rut}</p>
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Apellidos:</strong> {user.apellidos}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Fecha de Registro:</strong> {user.fechaRegistro}</p>
      </div>
      <h2>Actualizar Datos</h2>
      <form className="perfil-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Actualizar Datos</button>
        {message && <p className={`message ${message.includes('correctamente') ? 'success-message' : 'error-message'}`}>{message}</p>}
      </form>
    </div>
  );
}

export default Perfil;
