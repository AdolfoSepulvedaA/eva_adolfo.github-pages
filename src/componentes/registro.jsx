import React, { useState } from 'react';
import './registro.css'; // Importa el archivo CSS para los estilos

function Registro() {
  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    isAdult: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const generateUniqueId = () => {
    return 'user_' + Date.now() + Math.floor(Math.random() * 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isAdult) {
      setError('Debes ser mayor de 18 años para registrarte.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isRUTTaken = users.some((user) => user.rut === formData.rut);
    const isEmailTaken = users.some((user) => user.email === formData.email);

    if (isRUTTaken) {
      setError('El RUT ya está registrado.');
      return;
    }

    if (isEmailTaken) {
      setError('El correo electrónico ya está en uso.');
      return;
    }

    const newUser = {
      id: generateUniqueId(),
      ...formData,
      fechaRegistro: new Date().toLocaleString(),
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser)); // Set currentUser in localStorage
    setError('');

    // Limpiar el formulario
    setFormData({
      rut: '',
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      isAdult: false,
    });

    alert('Usuario registrado exitosamente');
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form className="registro-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rut">RUT:</label>
          <input type="text" id="rut" name="rut" value={formData.rut} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="isAdult" name="isAdult" checked={formData.isAdult} onChange={handleChange} />
          <label htmlFor="isAdult">Soy mayor de 18 años</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
