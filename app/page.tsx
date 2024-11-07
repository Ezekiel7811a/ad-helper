"use client";

import NodeCard from "./components/node-card/node-card";
import LinksTab from "./components/node-card/links-tab/links-tab";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MyNode } from "@/models/node";

const Home = () => {
  const [currentNode, setCurrentNode] = useState<MyNode | null>(null);
  const searchParams = useSearchParams();
  const nodeLabel = searchParams.get("nodeLabel");
  useEffect(() => {
    const setNodeOnLoad = async () => {
      const node = await fetch(
        `/api/get-node-by-label?nodeLabel=${nodeLabel}`
      ).then((res) => res.json());
      if (node) {
        setCurrentNode(node);
      }
    };
    if (nodeLabel) {
      setNodeOnLoad();
    }
  }, []);

  const displayNode = async (label: string) => {
    const node = await fetch("/api/get-node-by-label", {
      method: "GET",
      body: JSON.stringify({ label }),
    }).then((res) => res.json());
    setCurrentNode(node);
  };
  return (
    <div className="grid grid-cols-6 min-h-screen">
      {currentNode && (
        <div className="col-span-5">
          <NodeCard node={currentNode} />
        </div>
      )}
      {
        <div className="flex flex-col col-span-1 tab p-5 gap-y-12">
          {currentNode && (
            <LinksTab nodes={currentNode.links} setNode={displayNode} />
          )}
        </div>
      }
    </div>
  );
};

export default Home;
