import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Community.css';

const Community = () => {
  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="community-hero">
        <img 
          className="hero-img-bg" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDBKLohybpKNKUN2hNUzbueFtta-gtM0Ab4aIHU8F6BYx_Mii6qjAnoxPFhFpoGn93q1hU1dTMnuMP1dJ_7OxOd238xxdvm4Pu97lvlTm_DKj8DgB0bQThwNGtlBMRCNqNLCC50xstIiZJZusa8siG1tXo8gSqKJ88b7yRF_lzdF46k6urTaApplh7cpMBxm5cWAOUviZuuAHXo_nOL2s3nk0CgI346Up_Z_C6mEHXDv4b1S96u-xIiB12KJYOUs2ytygRHDuVr0" 
          alt="Gym Interior" 
        />
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center">
          <h1 className="hero-title">INITIATE<br/>FORCE</h1>
          <p className="hero-subtitle">THE CONSULTATION: DATA ACQUISITION & PERFORMANCE PROFILING</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="community-main-grid">
        {/* Booking Form Section */}
        <div className="booking-section" data-reveal-stagger>
          <div className="booking-card">
            <h2>RESERVE_SLOT</h2>
            <form className="form-grid">
              <div className="form-group">
                <label className="form-label">NAME_ID</label>
                <input className="input-technical" placeholder="ENTER FULL NAME" type="text" />
              </div>
              <div className="form-group">
                <label className="form-label">COMM_LINK</label>
                <input className="input-technical" placeholder="EMAIL_ADDRESS" type="email" />
              </div>
              <div className="form-group full-width">
                <label className="form-label">OBJECTIVE_TYPE</label>
                <div className="objective-selector">
                  <button className="btn-obj" type="button">HYPERTROPHY</button>
                  <button className="btn-obj active" type="button">POWER_LIFTING</button>
                  <button className="btn-obj" type="button">ENDURANCE</button>
                  <button className="btn-obj" type="button">REHAB</button>
                </div>
              </div>
              <div className="form-group full-width">
                <label className="form-label">INTEL_DUMP</label>
                <textarea className="input-technical" placeholder="SPECIFY PRIOR INJURIES, CURRENT MAXES, AND DESIRED KINETIC OUTPUT..." rows="4"></textarea>
              </div>
              <div className="full-width">
                <button className="btn-transmit">TRANSMIT_REQUEST</button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="map-box">
            <img className="map-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYk6TH9zMrXve15Eear9ZDFzM_zisbD8RdiMa2jSVivWTnf34aU9TBzLxh7sG4pvioFwk0TA6cmZYNKE6Ph9brufSNcX5tpHzDm_K_0GZKBUq7cdRbnWaQIgWh5RAk6tMRMvd9iB9K28yeQQseqchRkAvnSUoNqCSKf_JmwWtw_jOE8vKWyg-jCkEvnXzAFFuSJ3gMSqm2ymsEIY_PRbzPzf5alV4MJpUaYF9LkBzKAbfEHpT-sBKGZ1tIg-1M7_lp0FQBKOu32CA" alt="Austin Map" />
            <div className="map-overlay">
              <div className="marker-radar"></div>
              <div className="marker-ping"></div>
              <div className="marker">
                <FontAwesomeIcon 
                  icon={faDumbbell} 
                  rotation={90} 
                  size="sm" 
                  className="text-black"
                />
              </div>
              <div className="tooltip">
                <p className="tooltip-label">HQ_LOC_01: SECTOR_7_GRIND</p>
                <p className="tooltip-val">AUSTIN, TX // 78701</p>
              </div>
            </div>
            <div className="coord-box">
              <p className="coord-label">COORDINATES</p>
              <p className="coord-val">30.2672° N, 97.7431° W</p>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="sidebar-section" data-reveal-stagger>
          <div className="sidebar-card">
            <h3>DIRECT_CHANNEL</h3>
            <div className="contact-row">
              <div className="icon-square">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="label-tiny">VOICE_LINK</p>
                <p className="val-bold">+1 (800) OVER-DRV</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-square">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="label-tiny">DATA_STREAM</p>
                <p className="val-bold">ELITE@OVERDRIVE.PRO</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-square">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="label-tiny">ACTIVE_WINDOW</p>
                <p className="val-bold">0400 - 2200 CST</p>
              </div>
            </div>
          </div>

          <div className="social-grid-card">
            <div className="social-big-text">24/7</div>
            <p className="font-headline-md italic uppercase text-white mt-2">SUPPORT_GRID<br/>NEVER_SLEEPS</p>
            <div className="social-icons-row">
              <div className="social-icon-box"><span className="material-symbols-outlined">public</span></div>
              <div className="social-icon-box"><span className="material-symbols-outlined">share</span></div>
              <div className="social-icon-box"><span className="material-symbols-outlined">groups</span></div>
            </div>
          </div>

          <div className="bio-widget mt-8">
            <div className="flex justify-between font-label-bold text-[8px] text-[#c3f400] mb-1">
              <span>SYSTEM_LOAD</span>
              <span>98.2%</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: '98%' }}></div>
            </div>
            <p className="diag-log">&gt;&gt; RUNNING_DIAGNOSTICS... TRAINING_WINDOW_OPTIMIZED</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
