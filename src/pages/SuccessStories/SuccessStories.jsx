import './SuccessStories.css';
import './HallOfFame.css';
import './HeroFix.css'; // Forced Hero Overlay
import './HeaderCentered.css'; // Centered Hall of Fame Header

const SuccessStories = () => {
  return (
    <div className="results-page bg-black">
      {/* Hero Section - FIXED OVERLAY */}
      <section className="results-hero-section">
        <div className="hero-bg-fix">
          <img 
            className="hero-img" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-_QgqZDmOLMYh--koveQCc2YsWDdG6xOc_eNU6sa9rMM3O3jv3ijRfA7eMBqDtdrEfqtUbstaO1QEIP7qdgUmijAiIQ15UoVzSTyxyakwUfWFv8A6UNNm1znZs-kqKRnumH54XMUkHv_YNwrFF8MPHDqyUXcbcXvk2f7hpmDUFgfNb-Pfj7NSxBG9e7Zn_I1hFW87Nm1j9SDdMXZithp4jDzapQE5wfRD7tPrHdrFSd5eMCtd3bBTF3tg0u4jTKDIZcRW847iwk" 
            alt="Elite Transformation" 
          />
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <h1 className="results-title">
            <span>ELITE</span><br/>
            <span className="text-lime-glow">TRANSFORMATIONS</span>
          </h1>
          <p className="results-subtitle">
            NO EXCUSES. NO WEAKNESS. JUST UNDENIABLE PHYSICAL SUPERIORITY.
          </p>
        </div>
      </section>

      {/* Hall of Fame - CENTERED HEADER */}
      <section className="hall-of-fame-outer bg-surface-container-lowest py-24 px-6 md:px-12 lg:px-24">
        <div className="hall-header-centered">
          <span className="material-symbols-outlined lime-icon-large">stars</span>
          <h2 className="hall-title">HALL_OF_FAME</h2>
        </div>

        <div className="hall-of-fame-container group">
          <div className="hall-of-fame-image-side">
            <img 
              className="transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKXtTgTDWt7rIx_BpSsI1LMu188jdgk-mKHfbEj-zY5sKcI9AKWjUJTXCJLknznw0HqN2B7hLWQpwVEBwIZg8FxT-VICCsiVZ_d-0zKI6j1YItc8_1xNNPRzCvzXNN9VWQCtYU_S2w5E0gNI68i4NVhNmC9E2jmuLz0Pm3bnDYQuZZEP-nSwnlTQ8BaGueVcC78bUoLGVXzSR11z3NqHlEb2_9mqgRpULvu21qeB_5m0ZBGDoaapZzKXCVi3T3mHc3ZKjTaK4h2tI" 
              alt="Marcus Vane" 
            />
            <div className="absolute inset-y-0 left-1/2 w-px bg-lime/50 z-10 hidden group-hover:block"></div>
            <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 border border-lime z-20">
              <span className="font-label-bold text-lime text-xs">ELITE ATHLETE #001</span>
            </div>
          </div>

          <div className="hall-of-fame-text-side">
            <h3 className="athlete-name">MARCUS <span className="text-lime">VANE</span></h3>
            <div className="hall-stats-grid">
              <div className="hall-stat-item">
                <label>BODY FAT REDUCTION</label>
                <div className="val">-18%</div>
              </div>
              <div className="hall-stat-item">
                <label>LEAN MASS GAIN</label>
                <div className="val">+12KG</div>
              </div>
            </div>
            <blockquote className="hall-quote">
              "OVERDRIVE DIDN'T JUST CHANGE MY BODY; IT REWIRED MY ENTIRE MINDSET. THE INTENSITY IS UNMATCHED."
            </blockquote>
            <button className="btn-dossier-fixed">READ FULL DOSSIER</button>
          </div>
        </div>
      </section>

      {/* Results Bento Grid */}
      <section className="results-bento-section bg-black">
        <div className="bento-grid">
          <div className="bento-card sarah-card group">
            <div className="img-banner">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiIvpl240EoqTrYc8XR9xPHPRcHv9G8Sx79o0OxiSJS8EZwBLP2Uy-9LlaR7HpVbPTcwL9xOQA9bb1ZiJEclN1lAtL-bmQ5ZmtlJAnr5aV_UTb0I_s-Z2tQrha50WSvrG4hGUaOqheAnj3wNFkFv3uVOwW6rJnexdoo-f2BwBLFZhXt4GsoavmSanZ-jezZQlCoRCHuiNFod1Dlo-qcpX76E3x9clSRSI735J9FE3w1Cm7rh6U3KEApE30yYyfjv4zy2phRoJ6H2o" alt="Sarah K" />
            </div>
            <div className="card-body">
              <h4 className="card-title">SARAH K. <span>/ POWERLIFTER</span></h4>
              <div className="card-divider"></div>
              <div className="card-stats-row">
                <div className="stat-group">
                  <label>SQUAT MAX</label>
                  <div className="val">+85KG</div>
                </div>
                <div className="stat-group text-right">
                  <label>TIME FRAME</label>
                  <div className="val">12 WKS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card neon-card">
            <span className="material-symbols-outlined bolt-icon">bolt</span>
            <div>
              <div className="stat-val">-22%</div>
              <p className="stat-label">AVG. BODY FAT DROP ACROSS ELITE PROGRAM</p>
            </div>
          </div>

          <div className="bento-card join-card">
            <p className="card-label uppercase italic">JOIN THE ELITE</p>
            <p className="card-desc">Your transformation begins when you decide to stop being average.</p>
            <button className="btn-start uppercase italic">START NOW</button>
          </div>

          <div className="bento-card james-card group">
            <div className="text-content">
              <div>
                <h4 className="name">JAMES R.</h4>
                <label className="label">RECOVERY TRANSFORMATION</label>
              </div>
              <div className="quote-box">
                <p>"FROM CHRONIC PAIN TO PEAK PERFORMANCE IN 6 MONTHS."</p>
              </div>
            </div>
            <div className="img-side">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDywICr3YMRsU4eCtt_k6btYUlduphWl5kRWuQfhl4ASKqdxso2uKOlURJVv9ycwPFYwJNkmWFwkGO6aJ-WQoRrbROmDVn7avn-ztSniVdty2KZ5xgKeNsapBzLZTg55PAjWrtep6YlCuIg5biShebFgXfjsjrzUNZKnPKSPLAOXD22xZAPcEMKKtKXm4x_Vj7b8uXCPBmEEdH1LP9G1D7aigwqAe0o184c91gPlSJLyx2gzUqNL6iV0KtWoxHmDpoXTVoPwCg4_bA" alt="James R" />
            </div>
          </div>

          <div className="bento-card review-card">
            <div className="avatar">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTJtIcCC-Q8oK4D2aD2gAjXRgyshCLlxDLxTbnqOAggXpVE0UyVHCZ01lmjPiWNp9q_HdUFxxny9tPecnDeF2Rsx0u30yXH8yXFLfBfSdnarrtnHm6LqlOvVsRyS4UOIBN2Qf8FdHM7xCkeg-YmzHXjqYra28rgGvsoyjwzmwOIJJeuQYxNGh_1K77I2PZVaF1AuQjtg6LFeuGRUEa8IPSBuMlC7oiH7NpdliabhISbZsxGWR8X_oQ4slcG3kjwHTcy2chWwWmkRI" alt="Elena S" />
            </div>
            <div className="review-body">
              <div className="stars">★★★★★</div>
              <p className="quote">"THE MOST AGGRESSIVE AND SCIENTIFICALLY BACKED PROGRAM I'VE EVER FOLLOWED."</p>
              <p className="author uppercase tracking-widest">- ELENA S., IFBB PRO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section border-y-2 border-lime">
        <div className="marquee-content">
          <div className="marquee-track">
            <span className="marquee-item outlined">RESULTS NOT TYPICAL</span>
            <span className="marquee-item solid">OVERDRIVE PERFORMANCE</span>
            <span className="marquee-item outlined">BEYOND LIMITS</span>
            <span className="marquee-item solid">FUEL YOUR ANGER</span>
            <span className="marquee-item outlined">ELITE ONLY</span>
            {/* Repeat */}
            <span className="marquee-item outlined">RESULTS NOT TYPICAL</span>
            <span className="marquee-item solid">OVERDRIVE PERFORMANCE</span>
            <span className="marquee-item outlined">BEYOND LIMITS</span>
            <span className="marquee-item solid">FUEL YOUR ANGER</span>
            <span className="marquee-item outlined">ELITE ONLY</span>
          </div>
        </div>
      </section>

      {/* Results CTA */}
      <section className="results-cta bg-black">
        <h2 className="cta-title">
          READY TO BECOME<br/>
          <span className="text-lime text-glow">THE NEXT SUCCESS STORY?</span>
        </h2>
        <div className="cta-buttons">
          <button className="btn-solid-lime">START YOUR OVERDRIVE</button>
          <button className="btn-outline-lime-large">VIEW PROGRAMS</button>
        </div>
        <div className="scanlines"></div>
      </section>
    </div>
  );
};

export default SuccessStories;
