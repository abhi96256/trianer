import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero container">
        <span className="hero-badge">ENGINEERED PERFORMANCE</span>
        <h1 className="hero-title">
          SELECT YOUR <span className="highlight italic">TRAINING PHASE.</span>
        </h1>
        <p className="hero-description">
          Precision-built programming for those who demand elite results. Whether in-person or remote, we optimize every variable of your performance.
        </p>
      </section>

      {/* Bento Grid */}
      <section className="bento-section container">
        <div className="bento-grid" data-reveal-stagger>
          {/* Personal Training */}
          <div className="bento-item pt-card glass-stroke">
            <div className="card-bg">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXCI2Lv_rMGkMLwgTFMzjOxMklSziec605hjV0hBCNx9Z4NETw5nqmkM3C0epJMNXQYdaHPBH3lbOh2aJvXDbfY1kR3SfSNPSyMPcAJQgYcWUTt73m_v8-vqreb72CRUGAxhIcAXTmnb4Qz6JfstkYx4xpStVPnToP6f_uHloEmZpPPcbs7A6Udp3dEVLTOMP4mBB7sSbfKUWF75wrDA4gxD8ni0QxdpQBlkzlJEV9orv3KzTiyNRcVrxfHPqJ6i46bIDEkoKMj58" alt="Personal Training" />
              <div className="overlay"></div>
            </div>
            <div className="card-content">
              <div className="content-left">
                <div className="title-area">
                  <span className="badge">1-ON-1 ELITE</span>
                  <h2 className="title">Personal Training</h2>
                </div>
                <ul className="features-list">
                  <li>
                    <span className="material-symbols-outlined filled">check_circle</span>
                    Biometric Assessment
                  </li>
                  <li>
                    <span className="material-symbols-outlined filled">check_circle</span>
                    Customized Macro Blueprint
                  </li>
                  <li>
                    <span className="material-symbols-outlined filled">check_circle</span>
                    Recovery Optimization
                  </li>
                </ul>
              </div>
              <div className="content-right">
                <div className="price-area">
                  <span className="label">STARTING AT</span>
                  <span className="price">$120<span className="unit">/session</span></span>
                </div>
                <button className="btn-apply ambient-glow">APPLY FOR COACHING</button>
              </div>
            </div>
          </div>

          {/* Online Coaching */}
          <div className="bento-item online-card glass-stroke">
            <div className="online-img-box">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Twg0Px2im-pFlprn3-FUUVVtfhp97q3J_22s0fWts8FBwkm7NUPDtkLpx2PYHjfzGDnIqri_rBVim9Hc5mRYLplXMmyI7cBbtw4ugEp5IYrWDMLM49w_NUlxDP1aFdykCR5bFKFvu-9L5rbKzYHc0MQA3KUJ5lVB3d7MtZ9ohA9O_i6yFEsetiB6KvhzTWtxWPHvlG4Z4Z9TPmLWgx2bC0n3TcUA0bzxW0EUGYw4YMrkFNt8ABDKw4HeduY7B2NaJomGGPcrvPc" alt="Online Coaching" />
              <span className="img-label">Remote Access</span>
            </div>
            <h3 className="card-title">Online Coaching</h3>
            <p className="card-desc">World-class programming delivered anywhere in the world. Real-time feedback and data tracking.</p>
            <div className="price-display">
              <span className="price">$299<span className="unit">/mo</span></span>
            </div>
            <div className="capacity-bar">
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: '85%' }}></div>
              </div>
              <div className="bar-labels">
                <span>Program Capacity</span>
                <span className="highlight">85% Full</span>
              </div>
            </div>
            <button className="btn-outline-full">START NOW</button>
          </div>

          {/* Group HIIT */}
          <div className="bento-item group-card glass-stroke">
            <div className="bg-icon">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="group-info">
              <h3 className="card-title">Group HIIT</h3>
              <p className="card-desc">High-intensity sessions in a competitive, team-focused environment.</p>
            </div>
            <div className="group-price">
              <span className="label">WEEKLY ACCESS</span>
              <span className="price">$45<span className="unit">/wk</span></span>
            </div>
            <div className="group-action">
              <button className="btn-apply">SECURE YOUR SPOT</button>
              <p className="limit-text">Limited to 12 participants per session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-grid-section">
        <div className="container stats-grid" data-reveal-stagger>
          <div className="stat-item">
            <span className="value">500+</span>
            <span className="label">Athletes Trained</span>
          </div>
          <div className="stat-item">
            <span className="value lime">98%</span>
            <span className="label">Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="value">15+</span>
            <span className="label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="value lime">24/7</span>
            <span className="label">Support Access</span>
          </div>
        </div>
      </section>

      {/* Certification Chips */}
      <section className="chips-section container">
        <div className="chips-wrapper">
          <span className="chip">NASM-CPT</span>
          <span className="chip">CSCS CERTIFIED</span>
          <span className="chip">PRECISION NUTRITION L2</span>
          <span className="chip">OLYMPIC LIFTING COACH</span>
        </div>
      </section>
    </div>
  );
};

export default About;
