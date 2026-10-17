import { createContext, useContext, useState } from 'react';
import { projects } from '../data/ProjectData';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  const activeProject = projects[projectIndex];

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
    setMediaIndex(0);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setMediaIndex(0);
  };

  const nextMedia = () => {
    setMediaIndex((prev) => (prev + 1) % activeProject.media.length);
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev - 1 + activeProject.media.length) % activeProject.media.length);
  };

  const goToProject = (index) => {
    setProjectIndex(index);
    setMediaIndex(0);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        projectIndex,
        mediaIndex,
        activeProject,
        nextProject,
        prevProject,
        nextMedia,
        prevMedia,
        goToProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

