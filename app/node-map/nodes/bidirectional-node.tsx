import React, { memo } from "react";
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from "@xyflow/react";

const style = {
  padding: 10,
  background: "#fff",
  border: "1px solid #ddd",
};

const BiDirectionalNode = ({ data }: NodeProps<BuiltInNode>) => {
  return (
    <div style={style}>
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
