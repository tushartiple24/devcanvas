export default function PropertiesPanel() {
  return (
    <aside className="w-80 h-screen bg-slate-900/50 border-l border-slate-700/10 z-40 p-6 flex flex-col gap-8 shadow-[-10px_0_30px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-white">Node Properties</h2>
        <p className="text-xs text-slate-400 uppercase tracking-wider">Select a node to edit</p>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Empty State */}
          <div className="h-full flex items-center justify-center text-center">
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">No node selected</p>
              <p className="text-slate-500 text-xs">Click a node on the canvas to view its properties</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-auto pt-6 flex gap-3">
        <button className="flex-grow py-3 rounded-xl bg-slate-800/50 text-slate-300 font-medium text-sm border border-slate-700/20 hover:bg-slate-800 transition-all">
          Cancel
        </button>
        <button className="flex-grow py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 active:scale-95 transition-all hover:opacity-90">
          Save
        </button>
      </div>
    </aside>
  );
}
