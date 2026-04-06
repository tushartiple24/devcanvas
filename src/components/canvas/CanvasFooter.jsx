export default function CanvasFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 px-8 flex justify-between items-center z-50 pointer-events-none bg-gradient-to-t from-slate-900/40 to-transparent">
      <p className="text-xs font-mono text-slate-500/40">© 2024 DevCanvas. Built for the Architectural Logic.</p>
      <div className="flex gap-6 pointer-events-auto">
        <a className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors" href="#">
          GitHub
        </a>
        <a className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors" href="#">
          Documentation
        </a>
        <a className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors" href="#">
          Privacy
        </a>
      </div>
    </footer>
  );
}
