import { useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import useCanvasStore from '../../store/useCanvasStore';
import ApiNode from '../nodes/ApiNode';
import DbNode from '../nodes/DbNode';
import FunctionNode from '../nodes/FunctionNode';
import BugNode from '../nodes/BugNode';
import ExternalNode from '../nodes/ExternalNode';

export default function Canvas() {
  const { nodes, edges, setNodes, setEdges, setSelectedNode } = useCanvasStore();

  const nodeTypes = useMemo(
    () => ({
      api: ApiNode,
      db: DbNode,
      function: FunctionNode,
      bug: BugNode,
      external: ExternalNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes(applyNodeChanges(changes, nodes)),
    [nodes, setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges(applyEdgeChanges(changes, edges)),
    [edges, setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges(addEdge(connection, edges)),
    [edges, setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node.id);
  }, [setSelectedNode]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div id="reactflow-canvas-export-area" style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}
