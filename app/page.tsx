import { AlzheimerNode } from "@/public/nodes/generics/ad";
import NodeCard from "./components/node-card/node-card";
import LinksTab from "./components/node-card/links-tab/links-tab";

const Home = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <NodeCard node={AlzheimerNode} />
      </div>
      <div className="col-span-1">
        {AlzheimerNode.links && <LinksTab nodes={AlzheimerNode.links} />}
      </div>
    </div>
  );
};

export default Home;
