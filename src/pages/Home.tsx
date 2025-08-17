import { useState, useEffect } from 'react';
import { Page } from '../components/Page';
import { loadMarkdownContent, type PageContent } from '../utils/markdownLoader';
import { Loading } from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faHeart, faCalendarCheck, faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

interface CarouselImage {
  src: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  { src: '/pictures/events/467577316_10225404568963071_8838477138819151216_n.jpg', alt: 'Elegant Wedding Ceremony' },
  { src: '/pictures/events/498663607_10226921931616189_8170909277146438864_n.jpg', alt: 'Beautiful Event Setup' },
  { src: '/pictures/events/499183800_10226921932096201_1084515797136356291_n.jpg', alt: 'Wedding Reception' },
  { src: '/pictures/events/499264869_10226931941266424_6763980335718565726_n.jpg', alt: 'Corporate Event' },
  { src: '/pictures/events/499735716_10226928489380129_5769391724585253881_n.jpg', alt: 'Special Occasion' },
  { src: '/pictures/events/500126772_10226931941866439_9124778952242018806_n.jpg', alt: 'Event Coordination' },
];

export const Home = () => {
  const [content, setContent] = useState<PageContent | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    loadMarkdownContent('home').then(setContent);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  if (!content) {
    return <Loading message="Loading home page..." />;
  }

  return (
    <Page title={content.title} subtitle={content.subtitle} className="home-page" pageName="home">
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-decorations">
            <div className="floating-hearts">
              <FontAwesomeIcon icon={faHeart} className="heart heart-1" />
              <FontAwesomeIcon icon={faHeart} className="heart heart-2" />
              <FontAwesomeIcon icon={faHeart} className="heart heart-3" />
            </div>
            <div className="sparkles">
              <FontAwesomeIcon icon={faStar} className="sparkle sparkle-1" />
              <FontAwesomeIcon icon={faStar} className="sparkle sparkle-2" />
              <FontAwesomeIcon icon={faStar} className="sparkle sparkle-3" />
              <FontAwesomeIcon icon={faStar} className="sparkle sparkle-4" />
            </div>
          </div>
          <div className="hero-content">
            <div className="hero-title-wrapper">
              <h2 className="hero-title">Creating Unforgettable Moments</h2>
              <div className="title-underline"></div>
            </div>
            <p className="hero-description">
              We specialize in elegant weddings and sophisticated events that reflect your unique style and vision.
            </p>
            <div className="hero-actions">
              <a href="/consultation" className="btn btn-primary">
                <FontAwesomeIcon icon={faCalendarCheck} />
                Free Consultation
              </a>
              <a href="/packages" className="btn btn-secondary">
                <FontAwesomeIcon icon={faStar} />
                View Packages
              </a>
            </div>
          </div>
        </section>

        <section className="carousel-section">
          <div className="carousel-container">
            <h2 className="carousel-title">Our Beautiful Events</h2>
            <div className="carousel">
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
              <button className="carousel-btn carousel-prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-btn carousel-next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2 className="features-title">Why Choose Us</h2>
              <p className="features-subtitle">
                From concept to celebration, we bring expertise, creativity, and passion to every detail
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <h3 className="feature-title">Wedding Planning</h3>
                <p className="feature-description">
                  Complete wedding planning services from intimate ceremonies to grand celebrations. Every detail crafted with love and precision.
                </p>
                <div className="feature-highlights">
                  <span className="highlight-tag">Full Planning</span>
                  <span className="highlight-tag">Day-of Coordination</span>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                </div>
                <h3 className="feature-title">Event Coordination</h3>
                <p className="feature-description">
                  Corporate events, social gatherings, and special occasions planned to perfection. Seamless execution that impresses every guest.
                </p>
                <div className="feature-highlights">
                  <span className="highlight-tag">Corporate Events</span>
                  <span className="highlight-tag">Social Gatherings</span>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <h3 className="feature-title">Design & Styling</h3>
                <p className="feature-description">
                  Elegant design and styling that transforms your vision into reality. Creating rich, luxurious atmospheres that reflect your unique style and story.
                </p>
                <div className="feature-highlights">
                  <span className="highlight-tag">Custom Design</span>
                  <span className="highlight-tag">Venue Styling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-content">
            <div className="cta-main">
              <div className="cta-left">
                <h2 className="contact-title">Your Dream Event Awaits</h2>
                <p className="contact-description">
                  From "yes" to "I do" and beyond - let's bring your vision to life with expert planning, 
                  stunning design, and flawless execution that your guests will remember forever.
                </p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Events Planned</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Happy Couples</div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a href="/consultation" className="btn btn-primary btn-cta">
                    Free Consultation
                  </a>
                  <a href="/packages" className="btn btn-secondary">View Packages</a>
                </div>
              </div>

              <div className="cta-right">
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <FontAwesomeIcon icon={faStar} className="quote-icon" />
                    <p>"They turned our dream wedding into reality! Every detail was perfect, and our guests are still talking about it months later."</p>
                    <div className="testimonial-author">
                      <strong>Sarah & Michael</strong>
                      <span>Wedding Clients</span>
                    </div>
                  </div>
                </div>

                <div className="contact-highlight">
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faStar} className="highlight-icon" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faCalendarCheck} className="highlight-icon" />
                    <span>Flexible Planning Packages</span>
                  </div>
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faHeart} className="highlight-icon" />
                    <span>Personalized Service</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <a href="tel:2012842688" className="contact-item contact-link">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>(201) 284-2688</span>
              </a>
              <a href="mailto:weddingsnthings22@gmail.com" className="contact-item contact-link">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>weddingsnthings22@gmail.com</span>
              </a>
              <a href="https://calendly.com/weddingsnthings22/30min" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span>Schedule Online</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};