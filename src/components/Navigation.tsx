import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'Wedding Coordination', href: '/services/wedding-coordination' },
      ]
    },
    { 
      name: 'Packages', 
      href: '/packages',
      submenu: [
        { name: 'All Packages', href: '/packages' },
        { name: 'Stress-Free Package', href: '/packages/stress-free' },
        { name: 'The Bliss Package', href: '/packages/bliss' },
        { name: 'Corporate Events', href: '/packages/corporate' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <span className="brand-text">Weddings~N~Events</span>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navigation.map((item) => (
            <div
              key={item.name}
              className="nav-item"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'nav-link-active' : ''} ${item.submenu ? 'has-submenu' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
                {item.submenu && <span className="submenu-arrow">▼</span>}
              </Link>
              
              {item.submenu && activeDropdown === item.name && (
                <div className="submenu">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`submenu-link ${location.pathname === subItem.href ? 'submenu-link-active' : ''}`}
                      onClick={closeMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
        </button>
      </div>
    </nav>
  );
};