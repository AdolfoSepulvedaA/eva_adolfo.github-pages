import React from 'react';
import Slider from '../slider_imagenes';
import './main.css'; // Asegúrate de tener los estilos importados

function Main() {
  return (
    <main>
      <section id="home" className="home-section">
        <h1>The Golden Stick Records</h1>
        <h3>Estudio musical</h3>
      </section>
      
      <div className="content-container">
        <section id="slider" className="content-section">
          <Slider />
        </section>
        
        <section id="spotify" className="content-section">
          <div className="contenedor">
            <div className="spotify">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/2uTwICpKrBOXjRdn1SDPUB?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
