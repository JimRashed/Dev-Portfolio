import { ProjectProvider } from './context/ProjectContext';
import InfoSidebar from './components/ui/InfoSidebar';
import ProjectNavBar from './components/ui/ProjectNavBar';
import NavArrows from './components/ui/NavArrows';
import './components/ui/ui.css';

export default function App() {
  return (
    <ProjectProvider>
      <div className="app-container">
        <InfoSidebar />

        <main className="center-viewport">
          {/* CanvasContainer */}
          <NavArrows />
        </main>

        <ProjectNavBar />
      </div>
    </ProjectProvider>
  );
}