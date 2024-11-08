"use client";

import React, { useEffect, useState } from "react";
import {
  BaseEdge,
  Edge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  type EdgeProps,
} from "@xyflow/react";
import { CustomNode } from "@/models/custome-node";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const { setEdges, setNodes } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [selectedEdge, setSelectedEdge] = useState(false);

  useEffect(() => {
    const deleteEdge = () => {
      setEdges((edges: Edge[]) => {
        const thisEdge: Edge | undefined = edges.find(
          (edge: Edge) => edge.id === id
        );
        if (thisEdge) {
          setNodes((nodes) => {
            const sourceNode: CustomNode | undefined = nodes.find(
              (node) => node.id === thisEdge.source
            ) as CustomNode;
            const targetNode: CustomNode | undefined = nodes.find(
              (node) => node.id === thisEdge.target
            ) as CustomNode;
            if (sourceNode && targetNode) {
              sourceNode.data.links = sourceNode.data.links.filter(
                (link) => link !== targetNode.id
              );
              targetNode.data.links = targetNode.data.links.filter(
                (link) => link !== sourceNode.id
              );
            }
            return nodes;
          });
        }
        return edges.filter((edge) => edge.id !== id);
      });
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && selectedEdge) {
        deleteEdge();
        setSelectedEdge(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEdge, id, setEdges, setNodes]);

  return (
    <>
      <path
        d={edgePath} // Use the same path as BaseEdge
        fill="none"
        stroke={selectedEdge ? "gray" : "black"}
        strokeWidth={1} // Increase clickable area
        onClick={() => setSelectedEdge(!selectedEdge)} // Toggle selection
      />
      <path
        d={edgePath} // Use the same path as BaseEdge
        fill="none"
        strokeWidth={30} // Increase clickable area
        onClick={() => setSelectedEdge(!selectedEdge)} // Toggle selection
      />
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          pointerEvents: "none", // Disable pointer events
        }}
        interactionWidth={0}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "none",
            strokeWidth: 0,
          }}
          className="nodrag nopan"
        />
      </EdgeLabelRenderer>
    </>
  );
}
