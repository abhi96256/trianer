import './Hero.css';

const Hero = () => {
  return (
    <section className="overdrive-hero">
      <div className="hero-bg">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX951VF-XfcO3E5l7JycXKOvqCuZcUxbUu42RxmhQOj58JDhCV76xjUIjKU7gavWkz1s5DIzyzt7OwHoES2Vb6FbyKJKZU6OgCMDVvYy7GnHfqJEnatabgdpQdH0hWvbCdI7Lh7sLAsVZxVqiyAMfUQk5HeaxgHjgdP2Pr67Hcn-3miOfmcUAGZYKfARdeUR2XVIsFEnmW4_LBbCdHI2l3VdQoCoRtF_5fQ2QYAEwo6C1YHakH7PtiuuaU5KE60fyeG0y_iO2mv-w" alt="PRAVIN KARN" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container relative">
        <div className="hero-content">
          <h1 className="display-xl italic font-black uppercase leading-none">
            BREAK THE <span className="text-lime text-glow">LIMIT</span><br />
            COMMAND THE <span className="italic underline-lime">FORCE</span>
          </h1>
          
          <div className="hero-description-box">
            <p className="hero-text italic">
              The world doesn't need another trainer. It needs a performance architect. Sculpting elite physiques with digital precision and raw intensity.
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn-primary flex-center gap-4">
              START PROTOCOL
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="btn-outline">
              VIEW INTEL
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bottom-bar"></div>
    </section>
  );
};

export default Hero;
