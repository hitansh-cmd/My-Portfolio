
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className="image-placeholder">
            {project.title?.[0] || "P"}
          </span>
        )}
      </div>

      <h3>{project.title}</h3>

      <p className="muted">{project.description}</p>

      <div className="badges">
        {(project.technologies || []).map((tech) => (
          <span className="badge small" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a
            className="btn btn-ghost btn-small"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            className="btn btn-primary btn-small"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
