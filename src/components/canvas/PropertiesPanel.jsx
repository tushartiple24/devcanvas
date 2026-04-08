import { useState, useEffect, useRef } from 'react';
import useCanvasStore from '../../store/useCanvasStore';

export default function PropertiesPanel() {
  const { nodes, selectedNodeId, updateNodeProperties } = useCanvasStore();
  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const lastCommitted = useRef({ label: '', description: '' });

  useEffect(() => {
    if (selectedNode) {
      setLabel(selectedNode.data.label || '');
      setDescription(selectedNode.data.description || '');
      lastCommitted.current = {
        label: selectedNode.data.label || '',
        description: selectedNode.data.description || '',
      };
    }
  }, [selectedNodeId, selectedNode]);

  // Commit changes only on blur or Enter
  const commit = () => {
    if (!selectedNode) return;
    if (
      label !== lastCommitted.current.label ||
      description !== lastCommitted.current.description
    ) {
      updateNodeProperties(selectedNodeId, { label, description });
      lastCommitted.current = { label, description };
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      commit();
      e.target.blur();
    }
  };

  return (
    <aside className="w-80 h-screen bg-slate-900/50 border-l border-slate-700/10 z-40 p-6 flex flex-col gap-8 shadow-[-10px_0_30px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-white">Node Properties</h2>
        {!selectedNode && (
          <p className="text-xs text-slate-400 uppercase tracking-wider">Select a node to edit</p>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {!selectedNode ? (
            <div className="h-full flex items-center justify-center text-center">
              <div className="space-y-3">
                <p className="text-slate-400 text-sm">No node selected</p>
                <p className="text-slate-500 text-xs">Click a node on the canvas to view its properties</p>
              </div>
            </div>
          ) : (
            <form className="space-y-6">
              <div>
                <label className="block text-slate-400 text-xs mb-1">Title</label>
                <input
                  className="w-full rounded-lg bg-slate-800/70 border border-slate-700/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  onBlur={commit}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1">Description</label>
                <textarea
                  className="w-full rounded-lg bg-slate-800/70 border border-slate-700/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={commit}
                  onKeyDown={handleKeyDown}
                  rows={3}
                />
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-auto pt-6 flex gap-3">
        <button className="flex-grow py-3 rounded-xl bg-slate-800/50 text-slate-300 font-medium text-sm border border-slate-700/20 hover:bg-slate-800 transition-all" disabled>
          Cancel
        </button>
        <button className="flex-grow py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 active:scale-95 transition-all hover:opacity-90" disabled>
          Save
        </button>
      </div>
    </aside>
  );
}
