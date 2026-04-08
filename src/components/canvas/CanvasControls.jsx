import useCanvasStore from '../../store/useCanvasStore';

export default function CanvasControls() {
  const undo = useCanvasStore((s) => s.undo);
  const redo = useCanvasStore((s) => s.redo);

  return (
    <div className="absolute bottom-6 right-6 flex items-center gap-2 z-30">
      {/* Undo/Redo Controls */}
      <button
        className="p-2 bg-slate-800 text-white rounded hover:bg-slate-700"
        title="Undo"
        onClick={undo}
      >
        ⎌ Undo
      </button>
      <button
        className="p-2 bg-slate-800 text-white rounded hover:bg-slate-700"
        title="Redo"
        onClick={redo}
      >
        ↻ Redo
      </button>

      {/* Zoom Controls */}
      <div className="flex items-center bg-slate-950/60 backdrop-blur-md rounded-xl p-1 border border-slate-700/20 shadow-xl">
        <button className="p-2 hover:bg-slate-900/50 rounded-lg transition-colors text-slate-400 hover:text-slate-200 active:scale-95">
          ➖
        </button>
        <span className="px-3 text-xs font-medium text-slate-400 border-x border-slate-700/10">
          100%
        </span>
        <button className="p-2 hover:bg-slate-900/50 rounded-lg transition-colors text-slate-400 hover:text-slate-200 active:scale-95">
          ➕
        </button>
      </div>

      {/* Fit Screen Button */}
      <button className="p-3 bg-slate-950/60 backdrop-blur-md rounded-xl border border-slate-700/20 shadow-xl text-slate-400 hover:text-slate-200 transition-colors active:scale-95">
        📐
      </button>
    </div>
  );
}
