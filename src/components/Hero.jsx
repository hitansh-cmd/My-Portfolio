
import { Github, Linkedin } from "lucide-react";

function Hero({ data = {} }) {
  const socials = data.socials || {};

  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">
            Hi, I'm {data.name || "Hitansh Chaudhary"}
          </p>

          <h1 className="hero-title gradient-text">
            {data.role || "Web Developer"}
          </h1>

          <p className="hero-text">
            {data.tagline || "I build creative and responsive websites."}
          </p>

          <a href="#projects" className="btn btn-primary">
            Explore my work
          </a>

          <div className="social-icons">
            <a
              className="icon-link"
              href={socials.github || "#"}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              className="icon-link"
              href={socials.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo">
         
         <img src="\hitansh.png" alt="" />        </div>
      </div>
    </section>
  );
}

function About({ data = {} }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="gradient-text">About Me</h2>

        <p>
          {data.about ||
            "Hi, I'm Hitansh Chaudhary, a BCA student passionate about web development and technology. I enjoy building creative, responsive, and user-friendly websites."}
        </p>

        <p>
          {data.goals ||
            "My goal is to become a skilled software developer, improve my programming knowledge, and create meaningful digital experiences."}
        </p>
      </div>
    </section>
  );
}

export { About };
export default Hero;
