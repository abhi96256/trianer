import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <header className="overdrive-header">
      <div className="header-container">
        <div className="brand-logo italic font-black cursor-pointer" onClick={() => onNavigate('home')}>
          OVERDRIVE_PRO
        </div>
        
        <nav className="main-nav">
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'programs' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onNavigate('programs'); }}
          >
            PROGRAMS
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'results' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onNavigate('results'); }}
          >
            RESULTS
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'intel' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onNavigate('intel'); }}
          >
            INTEL
          </a>
          <a 
            href="#" 
            className={`nav-item ${currentPage === 'community' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onNavigate('community'); }}
          >
            COMMUNITY
          </a>
        </nav>

        <button className="btn-join italic font-black">
          JOIN_ELITE
        </button>
      </div>
    </header>
  );
};

export default Navbar;
