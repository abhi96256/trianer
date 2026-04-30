import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page bg-grid-subtle">
      <div className="container">
        {/* Header */}
        <header className="contact-header">
          <span className="hero-badge">READY TO ASCEND?</span>
          <h1 className="hero-title">
            COMMAND YOUR <span className="highlight">EVOLUTION.</span>
          </h1>
          <p className="hero-description">
            Elite results require elite precision. Connect with the APEX team to engineer your bespoke performance blueprint.
          </p>
        </header>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Form Section */}
          <div className="form-container glass-stroke">
            <h3 className="section-title italic">CONSULTATION REQUEST</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>FULL NAME</label>
                <input type="text" placeholder="ATHLETE NAME" />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="ACTIVE@PERFORMANCE.COM" />
              </div>
              <div className="form-group">
                <label>TRAINING FOCUS</label>
                <select>
                  <option>HYPERTROPHY</option>
                  <option>ELITE ATHLETICISM</option>
                  <option>POWERLIFTING</option>
                  <option>COMBAT PERFORMANCE</option>
                </select>
              </div>
              <div className="form-group">
                <label>EXPERIENCE LEVEL</label>
                <select>
                  <option>FOUNDATION (0-2 YRS)</option>
                  <option>ADVANCED (2-5 YRS)</option>
                  <option>ELITE (5+ YRS)</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label>YOUR OBJECTIVES</label>
                <textarea placeholder="DESCRIBE YOUR CURRENT BARRIERS AND GOALS..." rows="4"></textarea>
              </div>
              <div className="form-group full-width">
                <button type="submit" className="btn-submit ambient-glow">
                  SUBMIT APPLICATION
                  <span className="material-symbols-outlined">trending_flat</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="info-sidebar">
            <div className="info-box glass-stroke">
              <h3 className="section-title italic">DIRECT HQ</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="material-symbols-outlined lime-text">location_on</span>
                  <div>
                    <label>LOCATION</label>
                    <p>742 Performance Way, Elite Plaza<br />Los Angeles, CA 90210</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="material-symbols-outlined lime-text">alternate_email</span>
                  <div>
                    <label>EMAIL</label>
                    <p>hq@apextrainer.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="material-symbols-outlined lime-text">call</span>
                  <div>
                    <label>COMMUNICATIONS</label>
                    <p>+1 (800) APEX-ELT</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-btn glass-stroke"><span className="material-symbols-outlined">share</span></a>
                <a href="#" className="social-btn glass-stroke"><span className="material-symbols-outlined">groups</span></a>
                <a href="#" className="social-btn glass-stroke"><span className="material-symbols-outlined">video_library</span></a>
              </div>
            </div>

            <div className="map-box glass-stroke">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Y8poPB1FbzuoQu9zwX3Rbx_8SdhQfaH8CrxKtZneagnn8J8IJcVTGu0LfBa9Q6zTgbFB7UTC9GWVGBb6uclZN_cPW2TYvkEyqgSCVxksL8Osc3PFXGtnlcHGzJPkEJJSIhR5eJchjAF0QO927iGvDNXw-xIn-K9cmx3mNIfBCB9IG7iDODGP0kpP619s-RjyzXsmvmlK9BhOBsVlzP7GPImf7p_mb1zSpWNWS8raBn0fC1xCLCepSg7bdXRDStGywLNrZXRxKlw" alt="Location Map" />
              <div className="map-overlay">
                <div className="pulse-dot"></div>
                <span>LIVE AT APEX HQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="contact-stats">
          <div className="stat-box glass-stroke">
            <span className="value">98%</span>
            <span className="label">SUCCESS RATE</span>
          </div>
          <div className="stat-box glass-stroke">
            <span className="value">24/7</span>
            <span className="label">SUPPORT ACCESS</span>
          </div>
          <div className="stat-box glass-stroke">
            <span className="value">12+</span>
            <span className="label">ELITE COACHES</span>
          </div>
          <div className="stat-box glass-stroke">
            <span className="value">500+</span>
            <span className="label">TRANSFORMATIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
