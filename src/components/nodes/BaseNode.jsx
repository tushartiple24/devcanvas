import { Handle, Position } from 'reactflow';

export default function BaseNode({ data, color = 'blue', isConnecting, selected }) {
  const colorClasses = {
    blue: 'border-indigo-500/30 bg-slate-800/80 hover:bg-slate-700/80',
    green: 'border-emerald-500/30 bg-slate-800/80 hover:bg-slate-700/80',
    purple: 'border-purple-500/30 bg-slate-800/80 hover:bg-slate-700/80',
    red: 'border-red-500/30 bg-slate-800/80 hover:bg-slate-700/80',
    yellow: 'border-yellow-500/30 bg-slate-800/80 hover:bg-slate-700/80',
  };

  const colorClass = colorClasses[color] || colorClasses.blue;

  return (
    <>
      <Handle type="target" position={Position.Top} />

      <div
        className={`
          px-5 py-4 rounded-xl border-2 shadow-lg backdrop-blur-md
          w-64 transition-all duration-200 ease-out
          ${colorClass}
          ${selected ? 'border-indigo-500 shadow-2xl shadow-indigo-500/30 ring-2 ring-indigo-500/20' : 'border-slate-700/50'}
          hover:shadow-xl hover:scale-105 cursor-pointer
          ${isConnecting ? 'opacity-60' : 'opacity-100'}
        `}
      >
        <h3 className="font-bold text-sm leading-tight text-slate-100 mb-1 truncate">
          {data.label}
        </h3>
        {data.description && (
          <p className="text-xs leading-relaxed text-slate-400 line-clamp-2">
            {data.description}
          </p>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

