"use client";

import {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
  Handle,
  Position,
} from "@xyflow/react";
import { useCallback } from "react";

const CustomNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="custom-node" style={{ width: "100px", height: "50px" }}>
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const nodeTypes = { custom: CustomNode };

const NodeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([
    {
      id: "1",
      position: { x: 500, y: 500 },
      data: { label: "Node 1" },
      type: "custom-node",
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
    {
      id: "2",
      position: { x: 600, y: 500 },
      data: { label: "Node 2" },
      type: "custom-node",
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      sourceHandle: "right",
      targetHandle: "left",
      type: "buttonedge",
    },
  ]);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds: Edge[]) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const newNode: Node = {
      id: (nodes.length + 1).toString(), // Generate a unique ID based on length
      position: { x: Math.random() * 400, y: Math.random() * 400 }, // Random position
      data: { label: `Node ${nodes.length + 1}` }, // Label the node
      type: "custom-node", // Use the custom node type
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="bg-slate-200 h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
      <button onClick={addNode} className="absolute top-4 right-4 bg-blue-200">
        Add Node
      </button>
    </div>
  );
};

export default NodeMap;
