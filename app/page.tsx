"use client";

import NodeCard from "./components/node-card/node-card";
import LinksTab from "./components/node-card/links-tab/links-tab";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MyNode } from "@/models/node";
import { useRouter } from "next/navigation";

const Home = () => {
  const [currentNode, setCurrentNode] = useState<MyNode | null>(null);
  const searchParams = useSearchParams();
  const nodeLabel = searchParams.get("nodeLabel");
  const { push } = useRouter();
  useEffect(() => {
    const setNodeOnLoad = async () => {
      const node: MyNode = await fetch(
        `/api/get-node-by-label?nodeLabel=${nodeLabel}`
      )
        .then((res) => res.json())
        .then(async (nodeDTO) => {
          const node: MyNode = await import(
            `@/public/nodes/${nodeDTO.path}`
          ).then((module) => module.default);
          node.links = nodeDTO.links;
          return node;
        });
      if (node) {
        setCurrentNode(node);
      }
    };
    if (nodeLabel) {
      setNodeOnLoad();
    }
  }, [nodeLabel]);
  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => {
      if (event.key === "m") {
        push("/node-map");
      }
    };
    window.addEventListener("keydown", keyEvent);
    return () => {
      window.removeEventListener("keydown", keyEvent);
    };
  });

  const displayNode = async (label: string) => {
    push(`/?nodeLabel=${label}`);
  };
  return (
    <div className="grid grid-cols-6 min-h-screen">
      {currentNode && (
        <div className="col-span-5">
          <NodeCard node={currentNode} />
        </div>
      )}
      {currentNode && (
        <div className="flex flex-col col-span-1 tab p-5 gap-y-12">
          {currentNode && (
            <LinksTab nodes={currentNode.links} setNode={displayNode} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
