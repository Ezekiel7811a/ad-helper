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
} from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";
import bidirectionalNode from "./nodes/bidirectional-node";
import CustomEdge from "./nodes/button-edge";
import "@xyflow/react/dist/style.css";
import { getNodes } from "@/models/node-reflector/node-reflector";
import { MyNode } from "@/models/node";

const nodeTypes = { custom: bidirectionalNode };
const edgeTypes = { buttonedge: CustomEdge };

const NodeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([
    {
      id: "1",
      position: { x: 500, y: 500 },
      data: { label: "Node 1" },
      type: "custom",
    },
    {
      id: "2",
      position: { x: 600, y: 500 },
      data: { label: "Node 2" },
      type: "custom",
    },
  ]);
  const [newNodes, setNewNodes] = useState<MyNode[]>([]);
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
      setEdges((eds: Edge[]) =>
        addEdge({ ...params, type: "buttonedge" }, eds)
      ),
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

  useEffect(() => {
    const setNodes = async () => {
      const nodes = await getNodes("nodes");
      setNewNodes(nodes);
    };
    setNodes();
  }, []);

  return (
    <div className="bg-slate-200 h-screen grid grid-cols-4">
      <ReactFlow
        className="col-span-3"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
      <button onClick={addNode} className="absolute top-4 right-4 bg-blue-200">
        Add Node
      </button>
      <div className="col-span-1">
        <h2 className="text-2xl">Nodes</h2>
        <ul>
          {newNodes.map(({ title }, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NodeMap;
