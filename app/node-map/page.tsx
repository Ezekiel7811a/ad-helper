"use client";

import {
  addEdge,
  Connection,
  Controls,
  Edge,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";
import bidirectionalNode from "./nodes/bidirectional-node";
import CustomEdge from "./nodes/button-edge";
import "@xyflow/react/dist/style.css";
import RightPannel from "./right-pannel/right-pannel";
import { NodeDTO } from "@/models/node-dto";
import { CustomNode } from "@/models/custome-node";
import { writeNodesDTO } from "@/models/functions/write-nodes";

const nodeTypes = { custom: bidirectionalNode };
const edgeTypes = { buttonedge: CustomEdge };

const NodeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);
  const [newNodes, setNewNodes] = useState<NodeDTO[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const savingWrapper = async () => {
    const saving = new URL(window.location.href).searchParams.get("saving");
    if (saving) {
      const res = await writeNodesDTO();
      if (!res.ok) {
        console.error("Error in saving nodes");
      }
    }
  }
  useEffect(() => {
    const setInitialValues = async () => {
      savingWrapper();
      const data = await fetch("/api/node-map").then((res) => res.json());
      const customNodes: CustomNode[] = data.nodes;
      const edges: Edge[] = data.edges;
      setNodes(customNodes);
      setEdges(edges);

      const nodesDTO: NodeDTO[] = await fetch("/api/nodes").then((res) => res.json());
      //writeNodesDTO(nodesDTO);
      setNewNodes(
        nodesDTO.filter((node) => !customNodes.find((n) => n.data.label === node.title))
      );
    };
    setInitialValues();

  }, [setNodes, setEdges, setNewNodes]);

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
