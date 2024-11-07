"use client";

import React, { memo, useEffect, useState } from "react";
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
  useReactFlow,
} from "@xyflow/react";

const style = {
  padding: 10,
  background: "#fff",
  border: "1px solid #ddd",
};

const selectedStyle = {
  padding: 10,
  background: "#f0f0f0",
  border: "1px solid #ddd",
};

const BiDirectionalNode = ({ data }: NodeProps<BuiltInNode>) => {
  const [selected, setSelected] = useState(false);
  const { setNodes } = useReactFlow();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && selected) {
        setNodes((nodes) =>
          nodes.filter((node) => {
            console.log(node.data.label !== data.label);
            return node.data.label !== data.label;
          })
        );
        setSelected(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, data.label, setNodes]);

  return (
    <div
      style={selected ? selectedStyle : style}
      className="text-black"
      onClick={() => setSelected(!selected)}
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
