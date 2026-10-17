import { useProjects } from '../../context/ProjectContext';
import './ui.css';

export default function NavArrows() {
  const { prevProject, nextProject, prevMedia, nextMedia } = useProjects();

  return (
    <div className="arrows-overlay">
      <button
        className="arrow-btn up"
        onClick={prevProject}
        title="Previous Project (Arrow Up)"
        aria-label="Previous Project"
      >
        ▲
      </button>

      <button
        className="arrow-btn down"
        onClick={nextProject}
        title="Next Project (Arrow Down)"
        aria-label="Next Project"
      >
        ▼
      </button>

      <button
        className="arrow-btn left"
        onClick={prevMedia}
        title="Previous Media (Arrow Left)"
        aria-label="Previous Media"
      >
        ◀
      </button>

      <button
        className="arrow-btn right"
        onClick={nextMedia}
        title="Next Media (Arrow Right)"
        aria-label="Next Media"
      >
        ▶
      </button>
    </div>
  );
}