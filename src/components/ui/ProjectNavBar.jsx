import { useProjects } from '../../context/ProjectContext';
import './ui.css';

export default function RightNavRail() {
  const { projects, projectIndex, goToProject } = useProjects();

  return (
    <nav className="right-nav-rail" aria-label="Quick Project Navigation">
      <div className="nav-track">
        {projects.map((project, idx) => {
          const isActive = idx === projectIndex;
          return (
            <div key={project.id || idx} className="nav-dot-container">
              <button
                className={`nav-dot ${isActive ? 'active' : ''}`}
                onClick={() => goToProject(idx)}
                aria-label={`Jump to ${project.title}`}
              />
              <span className="nav-tooltip">{project.title}</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}