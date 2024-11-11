import { MyNode } from "@/models/node";

const AlphaSynuclein = new MyNode("AlphaSynuclein", [], <div>bonjour</div>);

export const Wrapper = () => <>{AlphaSynuclein.content}</>;

export default AlphaSynuclein;
