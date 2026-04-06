import { create } from 'zustand';

const useCanvasStore = create((set) => ({
  nodes: [
    {
      id: '1',
      type: 'default',
      data: { label: 'Start Node' },
      position: { x: 250, y: 150 },
    },
  ],
  edges: [],

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  addNode: (nodeData) =>
    set((state) => {
      const newNodeId = String(Math.max(...state.nodes.map((n) => parseInt(n.id) || 0)) + 1);
      const newNode = {
        id: newNodeId,
        type: 'default',
        data: nodeData || { label: `Node ${newNodeId}` },
        position: {
          x: Math.random() * 400,
          y: Math.random() * 300,
        },
      };
      return { nodes: [...state.nodes, newNode] };
    }),
}));

export default useCanvasStore;
