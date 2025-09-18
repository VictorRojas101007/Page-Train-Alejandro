import { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/Contenido Alejandro/imgs/resultado1.jpg',
    '/Contenido Alejandro/imgs/resultado2.jpg',
    '/Contenido Alejandro/imgs/resultado3.jpg',
    '/Contenido Alejandro/imgs/resultado4.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className="carousel-content">
          <img 
            src={images[currentIndex]} 
            alt={`Resultado ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;