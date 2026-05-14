import './Footer.css';

const Footer = () => {
  return (
    <footer className="overdrive-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand italic font-black">PRAVIN KARN</div>
            <div className="brand-statement">
              <p className="italic">
                We don't train athletes. We re-engineer potential. Through biometric synchronization and neural-response protocols, we push human performance beyond the absolute limit.
              </p>
            </div>
            <div className="social-grid">
              <a href="#" className="social-link"><span className="material-symbols-outlined">hub</span></a>
              <a href="#" className="social-link"><span className="material-symbols-outlined">share</span></a>
              <a href="#" className="social-link"><span className="material-symbols-outlined">database</span></a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="footer-links-col">
            <h4 className="col-title italic font-black">CORE_NAVIGATION</h4>
            <nav className="footer-nav">
              <a href="#"><span className="dot"></span> TRAINING PROTOCOLS</a>
              <a href="#"><span className="dot"></span> TELEMETRY ACCESS</a>
              <a href="#"><span className="dot"></span> MISSION STATEMENT</a>
              <a href="#"><span className="dot"></span> INTEL REPOSITORY</a>
            </nav>
          </div>

          {/* CTA Box */}
          <div className="footer-cta-col">
            <div className="cta-box glass-stroke">
              <h4 className="cta-title italic font-black">UPGRADE YOUR<br />SYSTEM_OUTPUT</h4>
              <p className="cta-desc">Enter the elite tier. Limited slots available for tactical coaching.</p>

              <span className="material-symbols-outlined bg-shield">shield</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">©2024 PRAVIN KARN. NO COMPROMISE. NO EXCUSES.</p>
          <div className="bottom-links">
            <a href="#">PRIVACY_PROTOCOL</a>
            <a href="#">TERMS_OF_FORCE</a>
            <a href="#">SUPPORT_GRID</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
