import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faWhatsapp, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Weddings~N~Events</h3>
            <p className="footer-description">
              Proud owner and lead coordinator of Weddings~N~Events by Brigette Towers-Diaz LLC.
              Creating unforgettable moments with elegance and sophistication.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/packages" className="footer-link">Packages</Link>
              <Link to="/testimonials" className="footer-link">Testimonials</Link>
              <Link to="/consultation" className="footer-link">Free Consultation</Link>
              <Link to="/faqs" className="footer-link">FAQs</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <a href="tel:2012842688" className="contact-item contact-link">
                <FontAwesomeIcon icon={faPhone} /> (201) 284-2688
              </a>
              <a href="mailto:weddingsnthings22@gmail.com" className="contact-item contact-link">
                <FontAwesomeIcon icon={faEnvelope} /> weddingsnthings22@gmail.com
              </a>
              <a href="https://calendly.com/weddingsnthings22/30min" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCalendarAlt} /> Schedule a Meeting
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect With Us</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/brigette-towers-diaz-founder-weddings~n~events-by-brigette-towers-llc-4aab9b287/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/chede1971" className="social-link" aria-label="Facebook Profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.facebook.com/groups/838148474095539" className="social-link" aria-label="Facebook Group" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUsers} />
              </a>
              <a href="https://chat.whatsapp.com/Du8MDBnOd207akCyEoItzF" className="social-link" aria-label="WhatsApp Group" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://open.spotify.com/playlist/3TCWVRriuUaXHNI0tL005n" className="social-link" aria-label="Spotify Playlist" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Weddings~N~Events by Brigette Towers-Diaz LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};