import { useNavigate } from 'react-router-dom';

export default function CanvasNavbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-4 inset-x-4 rounded-2xl border border-slate-700/20 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-black/50 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto z-50 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-tight text-slate-100 hover:text-white transition-colors"
        >
          DevCanvas
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="text-indigo-400 border-b-2 border-indigo-500 pb-1" href="#">
            Explore
          </a>
          <a className="text-slate-400 hover:text-slate-200 transition-all duration-300" href="#">
            Docs
          </a>
          <a className="text-slate-400 hover:text-slate-200 transition-all duration-300" href="#">
            Changelog
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-xl text-slate-400 hover:bg-slate-800/50 transition-all active:scale-95">
          🌙
        </button>
        <div className="h-6 w-[1px] bg-slate-700/30 mx-2"></div>
        <button className="px-4 py-2 rounded-xl text-sm font-medium text-slate-200 border border-slate-700/40 hover:bg-slate-800/50 transition-all active:scale-95">
          Export
        </button>
        <button className="px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-all active:scale-95">
          Share
        </button>
      </div>
    </header>
  );
}
