"use client";

import LinksTab from "./components/node-card/links-tab/links-tab";
import { ComponentType, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MyNode } from "@/models/node";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Home = () => {
    const DefaultDynamic = () => <div>Loading ...</div>;
    const [currentNode, setCurrentNode] = useState<MyNode | null>(null);
    const [DynamicComponent, setDynamicComponent] = useState<ComponentType>(
        () => DefaultDynamic
    );
    const [dynamicNodePath, setDynamicNodePath] = useState<string>();
    const [nodeLabel, setNodeLabel] = useState<string>();
    const searchParams = useSearchParams();
    useEffect(() => {
        // Update nodeLabel whenever searchParams change
        setNodeLabel(searchParams.get("nodeLabel") ?? "");
    }, [searchParams]);

    const { push } = useRouter();
    useEffect(() => {
        const setNodeOnLoad = async () => {
            const node: MyNode = await fetch(
                `/api/get-node-by-label?nodeLabel=${nodeLabel}`
            )
                .then((res) => res.json())
                .then(async (nodeDTO) => {
                    const node: MyNode = await import(
                        `@/app/components/nodes/${nodeDTO.path}`
                    ).then((module) => module.default);
                    const mutableNode = { ...node, links: nodeDTO.links };
                    setDynamicNodePath(nodeDTO.path);
                    return mutableNode;
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

    useEffect(() => {
        const loadDynamicComponent = async () => {
            const DynamicComponent = dynamic(
                () =>
                    import(`@/app/components/nodes/${dynamicNodePath}`).then(
                        (module) => module.Wrapper
                    ),
                {
                    ssr: false,
                }
            );
            setDynamicComponent(() => DynamicComponent);
        };
        if (dynamicNodePath) {
            loadDynamicComponent();
        }
    }, [dynamicNodePath]);

    const displayNode = async (label: string) => {
        push(`/?nodeLabel=${label}`);
    };
    return (
        <div className="grid grid-cols-6 h-screen">
            {currentNode && (
                <div className="col-span-5 overflow-x-visible overflow-y-auto flex flex-col gap-y-5">
                    <div className="title">
                        {currentNode.title
                            ? currentNode.title
                            : "No title found"}
                    </div>
                    <div className="paragraph overflow-x-visible">
                        <DynamicComponent />
                    </div>
                </div>
            )}
            {currentNode && (
                <div className="flex flex-col col-span-1 tab p-5 gap-y-12">
                    {currentNode && (
                        <LinksTab
                            nodes={currentNode.links}
                            setNode={displayNode}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
