"use client";

import React, { memo, useEffect, useState, MouseEvent } from "react";
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
  useReactFlow,
} from "@xyflow/react";
import { useRouter } from "next/navigation";

const style = {
  padding: 10,
  background: "#fff",
  border: "1px solid #ddd",
};

const selectedStyle = {
  ...style,
  padding: 10,
  background: "#f0f0f0",
  border: "1px solid #ddd",
};

const BiDirectionalNode = ({ data }: NodeProps<BuiltInNode>) => {
  const [selected, setSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const { setNodes, setEdges } = useReactFlow();
  const { push } = useRouter();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && selected) {
        setNodes((nodes) =>
          nodes.filter((node) => {
            const myNode = nodes.find((node) => node.data.label === data.label);
            setEdges((edges) => {
              return edges.filter((edge) => {
                return edge.source !== myNode?.id && edge.target !== myNode?.id;
              });
            });
            return node.data.label !== data.label;
          })
        );
        setSelected(false);
      }
      if (event.key === "Control") {
        setIsCtrlPressed(true);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Control") {
        setIsCtrlPressed(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [selected, data.label, setNodes, setEdges]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      push(`/?nodeLabel=${data.label}`);
    }
  };

  const handleNodeClick = (event: MouseEvent<HTMLDivElement>) => {
    handleClick(event);
    setSelected(!selected);
  };

  return (
    <div
      style={{
        ...(selected ? selectedStyle : style),
        textDecoration: isHovered && isCtrlPressed ? "underline" : "none",
      }}
      className="text-black"
      onClick={(e) => handleNodeClick(e)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        isConnectable={true}
      />
      {data?.label}
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  );
};

export default memo(BiDirectionalNode);
