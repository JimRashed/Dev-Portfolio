import { createContext, useContext, useState } from 'react';
import { projects } from '../data/ProjectData';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  const activeProject = projects && projects.length > 0 ? projects[projectIndex] : null;

  const nextProject = () => {
    if (!projects || projects.length === 0) return;
    setProjectIndex((prev) => (prev + 1) % projects.length);
    setMediaIndex(0);
  };

  const prevProject = () => {
    if (!projects || projects.length === 0) return;
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setMediaIndex(0);
  };

  const nextMedia = () => {
    if (!activeProject || !activeProject.media || activeProject.media.length === 0) return;
    setMediaIndex((prev) => (prev + 1) % activeProject.media.length);
  };

  const prevMedia = () => {
    if (!activeProject || !activeProject.media || activeProject.media.length === 0) return;
    setMediaIndex((prev) => (prev - 1 + activeProject.media.length) % activeProject.media.length);
  };

  const goToProject = (index) => {
    setProjectIndex(index);
    setMediaIndex(0);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: projects || [],
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

export const useProjects = () => {
  const ctx = useContext(ProjectContext);
  if (!ctx) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return ctx;
};