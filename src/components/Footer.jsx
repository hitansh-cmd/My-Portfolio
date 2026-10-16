
import { Github, Linkedin } from "lucide-react";

function Footer({ name, socials }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © 2026 {name} | Thanks for visiting!
        </p>

        <div className="social-icons">
          <a
            className="icon-link"
            href={socials?.github || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            className="icon-link"
            href={socials?.linkedin || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
