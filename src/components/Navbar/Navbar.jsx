import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="overdrive-header">
      <div className="header-container">
        <div className="brand-logo italic font-black cursor-pointer" onClick={() => handleLinkClick('home')}>
          PRAVIN KARN
        </div>
        
        <nav className={`main-nav ${isOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'programs' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('programs'); }}
          >
            PROGRAMS
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'results' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('results'); }}
          >
            RESULTS
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'intel' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('intel'); }}
          >
            INTEL
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'community' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('community'); }}
          >
            COMMUNITY
          </a>
        </nav>

        <div className="nav-actions">
          
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

