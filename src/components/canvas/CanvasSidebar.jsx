import useCanvasStore from '../../store/useCanvasStore';

const nodeTypes = [
  { id: 'api', icon: '🔗', label: 'API Node', color: 'text-indigo-400' },
  { id: 'db', icon: '🗄️', label: 'Database Node', color: 'text-emerald-400' },
  { id: 'function', icon: '⚙️', label: 'Function Node', color: 'text-purple-400' },
  { id: 'bug', icon: '🐛', label: 'Bug Node', color: 'text-red-400' },
  { id: 'external', icon: '🌐', label: 'External Service', color: 'text-cyan-400' },
];

export default function CanvasSidebar() {
  const { addNode } = useCanvasStore();

  return (
    <aside className="h-[calc(100vh-2rem)] w-20 hover:w-64 transition-all duration-300 rounded-2xl m-4 sticky left-0 z-40 bg-slate-950 flex flex-col py-6 items-center overflow-hidden shadow-xl shadow-black/40 border border-slate-700/10 group">
      {/* Workspace Header */}
      <div className="flex items-center gap-3 px-4 mb-10 w-full overflow-hidden whitespace-nowrap">
        <div className="h-10 w-10 flex-shrink-0 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
          🏗️
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-wider text-slate-400">Workspace</p>
          <p className="font-bold text-indigo-400">DevCanvas Pro</p>
        </div>
      </div>

      {/* Add Node Button */}
      <div className="flex flex-col gap-2 w-full px-2">
        <button
          onClick={() => addNode('api')}
          className="flex items-center gap-4 p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border-r-4 border-indigo-500 hover:bg-slate-800/80 transition-all"
        >
          <span>➕</span>
          <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Add Node</span>
        </button>

        {/* Node Type Buttons */}
        {nodeTypes.map((nodeType) => (
          <button
            key={nodeType.id}
            onClick={() => addNode(nodeType.id)}
            className="flex items-center gap-4 p-3 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-slate-800/80 transition-all"
          >
            <span className={`text-lg ${nodeType.color}`}>{nodeType.icon}</span>
            <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              {nodeType.label}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-4 items-center w-full px-2">
        <button className="flex items-center gap-4 p-3 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-slate-800/80 transition-all w-full">
          <span>❓</span>
          <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Help
          </span>
        </button>
        <button className="flex items-center gap-4 p-3 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-slate-800/80 transition-all w-full">
          <span>📊</span>
          <span className="text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Status
          </span>
        </button>
      </div>
    </aside>
  );
}
