import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="overdrive-testimony">
      <div className="bg-text italic font-black">TESTIMONY</div>
      
      <div className="container relative">
        <div className="testimony-grid">
          {/* Athlete Portrait */}
          <div className="portrait-side relative">
            <div className="corner-accent"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwur55kUzEldatsLrgiTFF-YgjPW9stM6YLC5ALegnPkN2S4tKuTdk9sonkfgN3O_eu5B46yMDRLPpTFjP4cWm-FFeOmfllaAOawd3kcODKpyozL6DB8E1dqMSRH_Dfl12hgW-NhBs3WXBdbMgfJY6eQfecJZQaXjcVROVJsySIB9OtIzTO0hKkYi_8R3JOwDDIXCiMx7RdD8VbbjKA61Ov9274JqJKRa683jVrtnP4ra6jGONKtqTfR-v7IBxyNtWW4L_y8ELzO4" 
              alt="Marcus Vance" 
              className="athlete-img grayscale"
            />
            <div className="rank-badge italic font-black">
              PRO_ATHLETE // RANK_01
            </div>
          </div>

          {/* Quote Area */}
          <div className="quote-side">
            <span className="material-symbols-outlined quote-icon">format_quote</span>
            <blockquote className="display-lg italic uppercase leading-tight">
              "THIS ISN'T A WORKOUT. IT'S A <span className="text-lime underline">RECODING</span> OF MY ENTIRE PHYSIOLOGY."
            </blockquote>
            <div className="accent-bar"></div>
            <div className="athlete-info">
              <p className="headline-md italic uppercase">MARCUS VANCE</p>
              <p className="tagline font-black">HEAVYWEIGHT DIVISION CHAMPION</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="overdrive-stats">
        <div className="container stats-flex">
          <div className="stat-item">
            <div className="stat-value italic">500+</div>
            <div className="stat-label">TRANSFORMATIONS</div>
          </div>
          <div className="stat-item">
            <div className="stat-value italic">12k</div>
            <div className="stat-label">FORCE_HOURS</div>
          </div>
          <div className="stat-item">
            <div className="stat-value italic">98%</div>
            <div className="stat-label">RECOILING_RATE</div>
          </div>
          <div className="stat-item">
            <div className="stat-value italic">MAX</div>
            <div className="stat-label">OUTPUT_LOCK</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
