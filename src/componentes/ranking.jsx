import React, { useEffect, useState } from 'react';

function Ranking() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.sort((a, b) => new Date(a.fechaRegistro) - new Date(b.fechaRegistro));
    setUsers(storedUsers);
  }, []);

  return (
    <div>
      <h2>Ranking de Usuarios Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de Registro</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.nombre}</td>
              <td>{user.apellidos}</td>
              <td>{user.fechaRegistro}</td>
              <td>Bienvenido a la comunidad!</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
