import { create } from 'zustand';

const nodeDefaults = {
  api: { label: 'API Endpoint', description: 'HTTP API' },
  db: { label: 'Database', description: 'Data Store' },
  function: { label: 'Function', description: 'Business Logic' },
  bug: { label: 'Bug', description: 'Issue Report' },
  external: { label: 'External Service', description: 'Third-party API' },
};

const useCanvasStore = create((set, get) => ({
  nodes: [
    {
      id: '1',
      type: 'api',
      data: { label: 'Start Node' },
      position: { x: 250, y: 150 },
    },
  ],
  edges: [],

  selectedNodeId: null,
  setSelectedNode: (id) => set({ selectedNodeId: id }),

  // Undo/Redo stacks
  undoStack: [],
  redoStack: [],

  // Push current state to undo stack
  pushToUndo: () => {
    const { nodes, edges, undoStack } = get();
    set({ undoStack: [...undoStack, { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) }], redoStack: [] });
  },

  undo: () => {
    const { undoStack, redoStack, nodes, edges } = get();
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    set({
      nodes: prev.nodes,
      edges: prev.edges,
      undoStack: undoStack.slice(0, -1),
      redoStack: [...redoStack, { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) }],
    });
  },

  redo: () => {
    const { undoStack, redoStack, nodes, edges } = get();
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    set({
      nodes: next.nodes,
      edges: next.edges,
      undoStack: [...undoStack, { nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) }],
      redoStack: redoStack.slice(0, -1),
    });
  },

  setNodes: (nodes, skipUndo = false) => {
    if (!skipUndo) get().pushToUndo();
    set({ nodes });
  },
  setEdges: (edges, skipUndo = false) => {
    if (!skipUndo) get().pushToUndo();
    set({ edges });
  },

  updateNodeProperties: (id, data) => {
    get().pushToUndo();
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    }));
  },

  addNode: (type = 'api') =>
    set((state) => {
      const newNodeId = String(Math.max(...state.nodes.map((n) => parseInt(n.id) || 0)) + 1);
      const defaults = nodeDefaults[type] || nodeDefaults.api;
      const newNode = {
        id: newNodeId,
        type,
        data: {
          label: defaults.label,
          description: defaults.description,
        },
        position: {
          x: Math.random() * 400 + 100,
          y: Math.random() * 300 + 100,
        },
      };
      // Push to undo stack
      get().pushToUndo();
      return { nodes: [...state.nodes, newNode] };
    }),
}));

export default useCanvasStore;
