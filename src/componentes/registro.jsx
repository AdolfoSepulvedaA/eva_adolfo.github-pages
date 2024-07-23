import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isAdult) {
      setError('Debes ser mayor de 18 años para registrarte.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      ...formData,
      fechaRegistro: new Date().toLocaleString(),
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    alert('Usuario registrado exitosamente');
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          RUT:
          <input type="text" name="rut" value={formData.rut} onChange={handleChange} required />
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <label>
          Apellidos:
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          <input type="checkbox" name="isAdult" checked={formData.isAdult} onChange={handleChange} />
          Soy mayor de 18 años
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
