import './App.css'
import Map from './components/Map'

function App() {
  return (
    <div className="design-root">
      <div>
        {/* Hero Section */}
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-section">
              <div className="hero-content">
                <p className="hero-title">Transforma Tu Viaje de Fitness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path>
              </svg>
            </div>
            <div className="service-content">
              <h2 className="service-title">Entrenamiento Personalizado</h2>
              <p className="service-description">Planes de entrenamiento personalizados adaptados a tus necesidades y objetivos individuales.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <div className="service-content">
              <h2 className="service-title">Clases Grupales</h2>
              <p className="service-description">Clases de Funcional grupales atractivas para todos los niveles, fomentando una comunidad de apoyo.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z"></path>
              </svg>
            </div>
            <div className="service-content">
              <h2 className="service-title">Guía Nutricional</h2>
              <p className="service-description">Consejos expertos sobre nutrición para complementar tu entrenamiento y optimizar los resultados.</p>
            </div>
          </div>
        </div>

        {/* Trainer Data Section */}
        <h2 className="section-title">Datos del Entrenador</h2>
        <div className="trainer-data">
          <div className="trainer-row">
            <p className="trainer-label">Nombre</p>
            <p className="trainer-value">Alejandro García</p>
          </div>
          <div className="trainer-row">
            <p className="trainer-label">Edad</p>
            <p className="trainer-value">38</p>
          </div>
          <div className="trainer-row">
            <p className="trainer-label">Ciudad</p>
            <p className="trainer-value">Trujillo-Perú</p>
          </div>
          <div className="trainer-row">
            <p className="trainer-label">Gimnasio</p>
            <p className="trainer-value">Sport Life</p>
          </div>
          <div className="trainer-row">
            <p className="trainer-label">Horarios</p>
            <p className="trainer-value">Lunes a Viernes: 9:00 - 11:00am - 4pm-7pm</p>
          </div>
        </div>

        {/* Gym Location Section */}
        <h2 className="section-title">Ubicación del Gimnasio</h2>
        <div className="location-section">
          <div className="gym-location-content">
            <div className="gym-location-info">
              <h3>Visítanos</h3>
              <p>Cahuide 401, Trujillo 13006, Trujillo</p>
              <div className="gym-hours">
                <h4>Horarios:</h4>
                <p>Lunes a Viernes: 6:00 AM - 10:00 PM</p>
                <p>Sábados y Domingos: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="gym-location-map">
              <Map />
            </div>
          </div>
        </div>

        {/* Training Videos Section */}
        <h2 className="section-title">Videos de Entrenamiento</h2>
        <div className="videos-container">
          <div className="videos-scroll">
            <div className="video-card">
              <video 
                className="video-thumbnail video-1" 
                controls 
                muted 
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              >
                <source src="/tran1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
              <div className="video-info">
                <p className="video-title">Resultados</p>
                <p className="video-description">Mira el antes y después de estas personas!!</p>
              </div>
            </div>
            <div className="video-card">
              <video 
                className="video-thumbnail video-3" 
                controls 
                muted 
                preload="metadata"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              >
                <source src="/tran2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
              <div className="video-info">
                <p className="video-title">Entrenamiento</p>
                <p className="video-description">Mejora tu físico con estos ejercicios</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <h2 className="section-title">Testimonios de Clientes</h2>
        <div className="testimonials-section">
          <div className="testimonial">
            <div className="testimonial-header">
              <div className="testimonial-avatar avatar-1"></div>
              <div className="testimonial-user">
                <p className="testimonial-name">Mariling</p>
                <p className="testimonial-date">hace 1 mes</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
            </div>
            <p className="testimonial-text">
              He visto resultados increíbles con el entrenamiento personalizado. Los entrenamientos son desafiantes pero alcanzables, y el apoyo es fantástico!
            </p>
          </div>

          <div className="testimonial">
            <div className="testimonial-header">
              <div className="testimonial-avatar avatar-2"></div>
              <div className="testimonial-user">
                <p className="testimonial-name">July</p>
                <p className="testimonial-date">hace 2 mes</p>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
              <div className="star">★</div>
            </div>
            <p className="testimonial-text">
              El entrenador Alejandro es excelente, muy profesional y dedicado. Sus rutinas personalizadas me ayudaron a alcanzar mis objetivos. Su experiencia y motivación constante hacen que cada sesión valga la pena.
            </p>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Banner */}
      <div className="whatsapp-banner">
        <span className="banner-text">¡Inscríbete aquí!</span>
        <div className="banner-arrow">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            fill="currentColor" 
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/51951735730?text=Hola,%20me%20interesa%20información%20sobre%20los%20entrenamientos" 
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="currentColor" 
          viewBox="0 0 256 256"
        >
          <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
