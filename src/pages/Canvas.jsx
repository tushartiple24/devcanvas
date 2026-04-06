import CanvasNavbar from '../components/canvas/CanvasNavbar';
import CanvasSidebar from '../components/canvas/CanvasSidebar';
import Canvas from '../components/canvas/Canvas';
import CanvasControls from '../components/canvas/CanvasControls';
import PropertiesPanel from '../components/canvas/PropertiesPanel';
import CanvasFooter from '../components/canvas/CanvasFooter';

export default function CanvasPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-900">
      {/* Navbar */}
      <CanvasNavbar />

      {/* Main Layout */}
      <main className="relative h-screen w-screen flex overflow-hidden pt-20">
        {/* Left Sidebar */}
        <CanvasSidebar />

        {/* Canvas Area */}
        <section className="flex-grow relative overflow-hidden">
          {/* Grid Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#444854 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              opacity: 0.15,
            }}
          ></div>

          {/* React Flow Canvas */}
          <Canvas />

          {/* Canvas Controls */}
          <CanvasControls />
        </section>

        {/* Right Properties Panel */}
        <PropertiesPanel />
      </main>

      {/* Footer */}
      <CanvasFooter />
    </div>
  );
}
