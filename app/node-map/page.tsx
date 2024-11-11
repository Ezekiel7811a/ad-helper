"use client";

import {
  addEdge,
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
import { MyNode } from "@/models/node";
import RightPannel from "./right-pannel/right-pannel";
import { NodeDTO } from "@/models/node-dto";
import { CustomNode } from "@/models/custome-node";

const nodeTypes = { custom: bidirectionalNode };
const edgeTypes = { buttonedge: CustomEdge };

const NodeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
  const [newNodes, setNewNodes] = useState<NodeDTO[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  useEffect(() => {
    const setInitialValues = async () => {
      const data = await fetch("/api/node-map");
      const { nodes, edges } = await data.json();
      setNodes(nodes);
      setEdges(edges);
    };
    setInitialValues();
  }, []);

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      setEdges((eds: Edge[]) =>
        addEdge({ ...params, type: "buttonedge" }, eds)
      );
      setNodes((nds: CustomNode[]) => {
        return nds.map((node) => {
          if (node.id === params.source) {
            return {
              ...node,
              data: {
                ...node.data,
                links: [...node.data.links, params.target],
              },
            };
          } else if (node.id === params.target) {
            return {
              ...node,
              data: {
                ...node.data,
                links: [...node.data.links, params.source],
              },
            };
          }
          return node;
        });
      });
    },
    [setEdges, setNodes]
  );

  const createNode = (node: NodeDTO) => {
    const newNode: CustomNode = {
      id: (nodes.length + 1).toString(),
      position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      data: {
        label: node.title,
        links: node.links,
        hypotheses: node.hypotheses,
      },
      type: "custom",
    };
    setNodes((nds) => [...nds, newNode]);
    setNewNodes((nds) => nds.filter((n) => n.title !== node.title));
  };

  useEffect(() => {
    const setNodes = async () => {
      const res = await fetch("/api/get-nodes");
      const myNodes: NodeDTO[] = await res.json();
      setNewNodes(myNodes);
    };
    setNodes();
  }, []);
  useEffect(() => {
    setNewNodes((myNodes) =>
      myNodes.filter((node) => !nodes.find((n) => n.data.label === node.title))
    );
  }, [nodes]);

  return (
    <div className="bg-primary h-screen grid grid-cols-4">
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
      <RightPannel
        nodes={newNodes}
        createNode={createNode}
        nodesMap={nodes}
        edgesMap={edges}
      />
    </div>
  );
};

export default NodeMap;
