import { Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting"></p>
          <h1 className="hero-title gradient-text"></h1>
          <p className="hero-text"></p>

          <a className="btn btn-primary"></a>

          <div className="social-icons">
            <a className="icon-link"><Github size={20} /></a>
            <a className="icon-link"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-photo">
          <img />
        </div>
      </div>
    </section>
  );
}

export default Hero;
