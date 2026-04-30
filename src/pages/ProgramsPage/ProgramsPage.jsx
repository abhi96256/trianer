import './ProgramsPage.css';

const ProgramsPage = () => {
  return (
    <div className="programs-page bg-background">
      {/* Hero Section */}
      <section className="programs-hero-section">
        <div className="hero-bg-container">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIwBN1Kckk-O1KoUCZKulT7GVYwzfxAt_DbVcmmDOeIZivueTilsG6Zqt4B5oKlKS8GbDs8V1TY9Q27hNsUFRTnrNVEy7pD7V29rwDbJuzjsDnq5ZJ2bBaD9f-OxXEHS75KEseqCQKjCOl6IYb1thFgFY5z7UN4PnbFs4cO4dOanOLZ-KqtOXj0GsiwrPwMehVytoi-VayfsOhhaYm6-0Bm9NoJE31P4iHo3Tau6A32szD-q3VKlR8ZiB4V3xp46C7T7da10pa-r0" 
            alt="Hero Background"
            className="hero-img"
          />
          <div className="hero-overlay-gradient"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="status-badge">SYSTEM_STATUS: READY</div>
          <h1 className="hero-title">
            OPTIMIZE<br/>
            <span className="highlight-text">PERFORMANCE</span>
          </h1>
          <p className="hero-subtitle">
            Deploying elite-tier training protocols designed for absolute force production and metabolic conditioning. No filler. No excuses. Just physics.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">TOTAL_REPS</span>
            <span className="stat-value">1.2M+</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">FORCE_OUTPUT</span>
            <span className="stat-value">98.4%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ACTIVE_UNITS</span>
            <span className="stat-value">14.2K</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">UPTIME</span>
            <span className="stat-value">24/7</span>
          </div>
        </div>
      </section>

      {/* Protocols Bento Grid */}
      <section className="protocols-section">
        <div className="protocols-header">
          <h2 className="section-title">SELECT_PROTOCOL</h2>
          <span className="filter-tag">FILTER: ALL_CATEGORIES</span>
        </div>

        <div className="bento-grid-container">
          {/* Main Protocol Card */}
          <div className="bento-card large group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCTn8R_rusYnGrnjrYr6zEKb1muRANNKpHMEY6pa4ugDPcLEmHpeM99dzkTv5w8uPJ3FxSTPF3Me7HJHfdeMwppJq7d9mrg4DDZw212UzY3M19ucLO7GB2DpukT3AmjdG1g6c7WTct4neqLxrXgtd0e8ox64jUO3WSs9W82KKk7T314IIC59meURyDW95vyIK1QfGt2Kw7OieCe9u5Uu0zptV_HdbHZdHwRNVXh-dgHJjNXzHl0Whw5XOxEeZzoi4KrQLiY-HviY" 
              className="card-bg-img" 
              alt="Hyper Growth"
            />
            <div className="card-overlay">
              <div className="card-top">
                <span className="intensity-badge">INTENSITY: LETHAL</span>
                <span className="card-number">01</span>
              </div>
              <div className="card-middle">
                <h3 className="card-title">HYPER_GROWTH_V4</h3>
                <p className="card-text">The ultimate hypertrophy blueprint. Utilizing mechanical tension and metabolic stress to bypass genetic plateaus.</p>
              </div>
              <div className="card-bottom">
                <div className="card-price">$149<small>USD</small></div>
                <button className="btn-deploy">DEPLOY_PROTOCOL</button>
              </div>
            </div>
          </div>

          {/* Side Protocol Card */}
          <div className="bento-card secondary">
            <div className="card-header">
              <span className="material-symbols-outlined lime">bolt</span>
              <span className="header-label">Neural_Optics</span>
            </div>
            <h3 className="sub-card-title">NEURAL_PREP_60</h3>
            <ul className="feature-list">
              <li><span className="material-symbols-outlined">check_circle</span> CNS Priming</li>
              <li><span className="material-symbols-outlined">check_circle</span> Reactive Force</li>
              <li><span className="material-symbols-outlined">check_circle</span> Load Management</li>
            </ul>
            <div className="card-footer">
              <div className="old-price">$89.00</div>
              <div className="new-price">$49</div>
              <button className="btn-acquire">ACQUIRE</button>
            </div>
          </div>

          {/* Kinetic Flow Card */}
          <div className="bento-card accent">
            <span className="material-symbols-outlined large-icon">motion_sensor_active</span>
            <div className="accent-content">
              <h3 className="accent-title">KINETIC_FLOW</h3>
              <p className="accent-text italic">Optimized mobility for high-output environments. Zero friction, total range.</p>
            </div>
            <div className="accent-footer">
              <span className="footer-label">FREE_DL</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          {/* Enduro Core Card */}
          <div className="bento-card glass-card">
            <div className="glass-inner">
              <div className="glass-content">
                <h3 className="glass-title">ENDURO_CORE_SYSTEM</h3>
                <div className="glass-stats">
                  <div className="stat">
                    <span className="label">Duration</span>
                    <span className="val">12 WEEKS</span>
                  </div>
                  <div className="stat">
                    <span className="label">Difficulty</span>
                    <span className="val">ELITE_ONLY</span>
                  </div>
                </div>
                <div className="glass-price">$199</div>
                <button className="btn-init">INITIALIZE</button>
              </div>
              <div className="glass-modules">
                <div className="module active">
                  <span className="mod-label">MODULE_01</span>
                  <span className="mod-name">Aerobic Threshold Optimization</span>
                </div>
                <div className="module">
                  <span className="mod-label">MODULE_02</span>
                  <span className="mod-name">Glycogen Sparing Tactics</span>
                </div>
                <div className="module">
                  <span className="mod-label">MODULE_03</span>
                  <span className="mod-name">Neural Fatigue Management</span>
                </div>
              </div>
            </div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwcq2CtXPeqyneeZkalIFkWrOt3AXoExGdQcrzNqlSQ0hrUM2SqYNFVd_WcCzvBzNih8stvEUWoIfKgZTGdONRFgmAYPNLQZvCRvBB1NP2MxPQGGHi7A5hGtfuxzBL1eJQ3BHz5FQ4WcpGisMEm1jXKNRyIvbj4wn4_9qG_JOBccH3BAi3RmjPiMTLL4gRyahLFjSwfWX6cDgacDZxFuy_NVu_IAgZDf36v0MeXOCNA6I5dY--CQaCfOj0GNNzh_k4g-kgffqWwtg" className="glass-bg-img" alt="Enduro" />
          </div>
        </div>
      </section>

      {/* Integrated Telemetry Section */}
      <section className="intel-section">
        <div className="intel-container">
          <div className="intel-text">
            <h2 className="intel-title">INTEGRATED_TELEMETRY</h2>
            <p className="intel-desc">Every program includes access to our proprietary biometric dashboard. Track your central nervous system recovery, force output per session, and metabolic efficiency in real-time. This is not a PDF; it's a living performance OS.</p>
            <div className="intel-icons">
              <div className="icon-box"><span className="material-symbols-outlined">monitoring</span><small>REALTIME</small></div>
              <div className="icon-box"><span className="material-symbols-outlined">precision_manufacturing</span><small>BIO_SYNC</small></div>
              <div className="icon-box"><span className="material-symbols-outlined">security</span><small>SECURE</small></div>
            </div>
          </div>
          <div className="intel-visual">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxFds5DOy7xKAbVi2KOtBgI_qYhVti0yLc4UAc9fSDFtLbipziUINnWk6ooc089GpCuoDAmdArwCIB0S5AE4XL1iHeG0tFcNXvDyPWY5Da5l4vQncLDiX3WDyV867ekhf4YmVDzFsboZ7z-pfFZowBCguUFlDfcJ7Z-egJP5RPHygX7kkWjfu3Jl5IkaHRMnWkxB12CzCD8stA9ElZYkOwBxy8Q4P4EiCsjHg5AE0ptWsD8rG0Efjr2-YVDWohi6e2SzDbsowh4IM" alt="Dashboard" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
