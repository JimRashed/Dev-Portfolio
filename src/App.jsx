import { ProjectProvider } from './context/ProjectContext';
import LeftSidebar from './components/ui/LeftSidebar';
import RightNavRail from './components/ui/RightNavRail';
import NavigationArrows from './components/ui/NavigationArrows';
import './components/ui/ui.css';

export default function App() {
  return (
    <ProjectProvider>
      <div className="app-container">
        <LeftSidebar />

        <main className="center-viewport">
          {/* CanvasContainer */}
          <NavigationArrows />
        </main>

        <RightNavRail />
      </div>
    </ProjectProvider>
  );
}