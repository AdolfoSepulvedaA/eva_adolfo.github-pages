import React, { useState, useEffect } from 'react';
import './slider.css'; // Asegúrate de crear este archivo para el estilo del slider
import portada1 from './componentes/img/singles/portada 1.jpg';
import portada2 from './componentes/img/singles/portada 2.jpg';
import portada3 from './componentes/img/singles/portada 3.jpg';
import portada4 from './componentes/img/singles/portada 4.jpg';
import portada5 from './componentes/img/singles/portada 5.jpg';

const images = [
  portada1,
  portada2,
  portada3,
  portada4,
  portada5
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos (3000 ms)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt="slide" className="slide-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slider;
