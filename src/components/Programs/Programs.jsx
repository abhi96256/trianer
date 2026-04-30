import './Programs.css';

const Programs = ({ onNavigate }) => {
  return (
    <section className="overdrive-programs bg-grid-subtle" id="programs">
      <div className="container">
        <div className="section-header">
          <h2 className="display-lg italic uppercase">CORE_SYSTEMS</h2>
          <span className="version-tag">V.4.0_ENHANCED</span>
        </div>

        <div className="programs-bento">
          {/* Neural Response */}
          <div className="bento-card wide glass-stroke group pointer-cursor" onClick={() => onNavigate && onNavigate('programs')}>
            <div className="card-icon-bg">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <div className="card-content">
              <span className="tag-number">01 // PERFORMANCE</span>
              <h3 className="headline-xl italic">NEURAL_RESPONSE_TRAINING</h3>
              <p className="card-desc">Advanced protocols designed to synchronize central nervous system output with explosive muscular force. Zero latency. Maximum impact.</p>
            </div>
          </div>

          {/* Biometric */}
          <div className="bento-card highlight-border pointer-cursor" onClick={() => onNavigate && onNavigate('programs')}>
            <div className="card-content">
              <span className="material-symbols-outlined lime-icon">monitoring</span>
              <h3 className="headline-md italic">BIOMETRIC_ANALYTICS</h3>
              <p className="card-desc">Real-time data tracking for every rep, set, and recovery cycle. Quantify your growth.</p>
              <a href="#" className="access-link" onClick={(e) => { e.preventDefault(); onNavigate('programs'); }}>
                ACCESS DATA <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>

          {/* Fuel Intelligence */}
          <div className="bento-card glass-stroke pointer-cursor" onClick={() => onNavigate && onNavigate('programs')}>
            <div className="card-content">
              <span className="material-symbols-outlined lime-icon">nutrition</span>
              <h3 className="headline-md italic">FUEL_INTELLIGENCE</h3>
              <p className="card-desc">Precision macro-nutrient architecture tailored to your genetic profile and energy expenditure.</p>
            </div>
          </div>

          {/* Force Community */}
          <div className="bento-card wide glass-stroke pointer-cursor" onClick={() => onNavigate && onNavigate('programs')}>
            <div className="card-content flex-row">
              <div className="text-area">
                <h3 className="headline-xl italic">FORCE_COMMUNITY</h3>
                <p className="card-desc">Join a collective of high-performers. No excuses. No ego. Only the pursuit of perfection.</p>
              </div>
              <div className="community-grid">
                <div className="box dark"></div>
                <div className="box lime"></div>
                <div className="box lime"></div>
                <div className="box dark"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
