import React, { useEffect, useState } from 'react';
import './ranking.css'; // Asegúrate de crear este archivo CSS

function Ranking() {
  const [users, setUsers] = useState([]);
  const [emoticons, setEmoticons] = useState({});

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro)); // Ordena por fecha de registro descendente
    setUsers(storedUsers);
    
    // Cargar emoticonos del localStorage o inicializar vacío
    setEmoticons(JSON.parse(localStorage.getItem('userEmoticons')) || {});
  }, []);

  const handleEmoticonChange = (userEmail, newEmoticon) => {
    if (['👍', '❤️', '👎'].includes(newEmoticon)) {
      const updatedEmoticons = { ...emoticons, [userEmail]: newEmoticon };
      setEmoticons(updatedEmoticons);
      localStorage.setItem('userEmoticons', JSON.stringify(updatedEmoticons));
    }
  };

  return (
    <div className="ranking-container">
      <h2>Ranking de Usuarios Registrados</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de Registro</th>
            <th>Emoticono</th>
            <th>Asignar Emoticono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.nombre}</td>
              <td>{user.apellidos}</td>
              <td>{user.fechaRegistro}</td>
              <td>{emoticons[user.email] || 'Ninguno'}</td>
              <td>
                <select
                  value={emoticons[user.email] || ''}
                  onChange={(e) => handleEmoticonChange(user.email, e.target.value)}
                >
                  <option value="">Seleccionar emoticono</option>
                  <option value="👍">Like 👍</option>
                  <option value="❤️">Corazón ❤️</option>
                  <option value="👎">Deslike 👎</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
