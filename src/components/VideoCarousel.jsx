import { useState } from 'react';
import './VideoCarousel.css';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videos = [
    '/Contenido Alejandro/videos/Entrenamiento1.mp4',
    '/Contenido Alejandro/videos/Entrenamiento2.mp4',
    '/Contenido Alejandro/videos/Entrenamiento3.mp4',
    '/Contenido Alejandro/videos/Entrenamiento4.mp4',
    '/Contenido Alejandro/videos/Entrenamiento5.mp4',
    '/Contenido Alejandro/videos/Entrenamiento6.mp4',
    '/Contenido Alejandro/videos/Entrenamiento7.mp4',
    '/Contenido Alejandro/videos/Entrenamiento8.mp4',
    '/Contenido Alejandro/videos/Entrenamiento9.mp4'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="video-carousel-container">
      <div className="video-carousel-wrapper">
        <button className="video-carousel-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className="video-carousel-content">
          <video 
            key={currentIndex}
            className="carousel-video"
            controls 
            muted 
            preload="metadata"
          >
            <source src={videos[currentIndex]} type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
        </div>
        
        <button className="video-carousel-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      
      <div className="video-carousel-dots">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`video-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;