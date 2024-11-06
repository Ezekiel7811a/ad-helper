"use client";

import NodeCard from "./components/node-card/node-card";
import LinksTab from "./components/node-card/links-tab/links-tab";
import { useCallback, useState } from "react";
import "@/public/nodes/lazy-loader";
import { ATN } from "@/public/nodes/classifications/atn/atn";
import {
  addEdge,
  Node,
  Edge,
  ReactFlow,
  useEdgesState,
  useNodesState,
  Connection,
  Controls,
  Background,
} from "@xyflow/react";
import { AlzheimerNode } from "@/public/nodes/generics/ad";

const Home = () => {
  const [currentNode, setCurrentNode] = useState(AlzheimerNode);
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="col-span-5">
        <NodeCard node={currentNode} />
      </div>
      <div className="flex flex-col col-span-1 tab p-5 gap-y-12">
        {currentNode.links && (
          <LinksTab nodes={currentNode.links} setNode={setCurrentNode} />
        )}
      </div>
    </div>
  );
};

export default Home;
