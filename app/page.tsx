"use client";

import { AlzheimerNode } from "@/public/nodes/generics/ad";
import NodeCard from "./components/node-card/node-card";
import LinksTab from "./components/node-card/links-tab/links-tab";
import { useState } from "react";
import "@/public/nodes/lazy-loader";
import { MathJax } from "better-react-mathjax";
import { Assymetric } from "@/public/nodes/signal/meg/connectivity/assymetric/assymetric";
import { ATN } from "@/public/nodes/classifications/atn/atn";

const Home = () => {
  const [currentNode, setCurrentNode] = useState(ATN);
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
