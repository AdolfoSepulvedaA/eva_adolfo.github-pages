// src/componentes/Cantantes.jsx
import React from 'react';
import './cantantes.css'; // Asegúrate de tener este archivo de estilos
import artista1 from './img/Artistas/Artista1.jpg';
import artista2 from './img/Artistas/Artista2.jpg';
import artista3 from './img/Artistas/Artista3.jpg';
import artista4 from './img/Artistas/Artista4.jpg';

const Cantantes = () => {
  return (
    <section id="cantantes">
      <table>
        <thead>
          <tr>
            <th>Artista</th>
            <th>Descripción</th>
            <th>Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="artista">
              <div>
                <img src={artista1} alt="Imagen del artista" />
              </div>
            </td>
            <td className="descripcion">
              <div>
                <h1>Amesti The Gold Mind</h1>
                <h2>Cantante y compositor</h2>
                <h3>Estilos:</h3>
                <h3>Trap</h3>
                <h3>Reggaeton</h3>
                <h3>R & B</h3>
                <h3>Rap</h3>
              </div>
            </td>
            <td className="redes">
              <div>
                <a href="https://www.instagram.com/amesti.thegoldmind.gsr/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                <a href="https://open.spotify.com/intl-es/artist/2mf8pdRoAQsZKDmpI7DqDV" target="_blank" rel="noopener noreferrer">Spotify</a><br />
                <a href="https://www.youtube.com/channel/UCJEUWYnQ9r3zcCTlLMAJISQ" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="artista">
              <div>
                <img src={artista2} alt="Imagen del artista" />
              </div>
            </td>
            <td className="descripcion">
              <div>
                <h1>Santiz Rivera</h1>
                <h2>Cantante, compositor, beatmaker y productor</h2>
                <h3>Estilos:</h3>
                <h3>Trap</h3>
                <h3>Reggaeton</h3>
              </div>
            </td>
            <td className="redes">
              <div>
                <a href="https://www.instagram.com/santiz.rivera_gsr/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                <a href="https://open.spotify.com/intl-es/artist/4Z9DmguJRxdBDKLjd2yMe1" target="_blank" rel="noopener noreferrer">Spotify</a><br />
                <a href="https://www.youtube.com/@santizrivera7023?app=desktop&sub_confirmation=1&sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="artista">
              <div>
                <img src={artista3} alt="Imagen del artista" />
              </div>
            </td>
            <td className="descripcion">
              <div>
                <h1>Lil.jaminsito</h1>
                <h2>Cantante</h2>
                <h3>Estilos:</h3>
                <h3>Trap</h3>
                <h3>Reggaeton</h3>
                <h3>Rap</h3>
              </div>
            </td>
            <td className="redes">
              <div>
                <a href="https://www.instagram.com/lil.jaminsito/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                <a href="https://open.spotify.com/intl-es/artist/42tcSxkiGgMfYO3r5sdbh0" target="_blank" rel="noopener noreferrer">Spotify</a><br />
                <a href="https://www.youtube.com/channel/UCIAyrN7064eIl93Ms3i8pPQ" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="artista">
              <div>
                <img src={artista4} alt="Imagen del artista" />
              </div>
            </td>
            <td className="descripcion">
              <div>
                <h1>Haiko</h1>
                <h2>Beatmaker y producción</h2>
                <h3>Estilos:</h3>
                <h3>Trap</h3>
                <h3>Reggaeton</h3>
                <h3>Rap</h3>
                <h3>Electrónica</h3>
              </div>
            </td>
            <td className="redes">
              <div>
                <a href="https://www.instagram.com/haiko.gsr/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cantantes;
