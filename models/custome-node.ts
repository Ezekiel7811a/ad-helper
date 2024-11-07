import { Node } from "@xyflow/react";

export interface CustomNode extends Node {
  data: {
    label: string;
    links: string[];
  };
}
