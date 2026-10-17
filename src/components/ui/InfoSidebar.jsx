import { useProjects } from '../../context/ProjectContext';
import './ui.css';

export default function LeftSidebar() {
  const { activeProject } = useProjects();

  return (
    <aside className="left-sidebar">
      <button className="back-btn" title="Back" aria-label="Go Back">
        ←
      </button>

      <header className="sidebar-header">
        <h2 className="project-title">{activeProject.title}</h2>
      </header>

      <p className="project-description">{activeProject.description}</p>

      {activeProject.videoUrl && (
        <div className="video-container">
          <iframe
            className="video-frame"
            src={activeProject.videoUrl}
            title={`${activeProject.title} Video Preview`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </aside>
  );
}