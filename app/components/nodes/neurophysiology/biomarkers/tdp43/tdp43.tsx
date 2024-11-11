import { MyNode } from "@/models/node";

const TDP43 = new MyNode("TDP43", [], <div>bonjour</div>);

export const Wrapper = () => <>{TDP43.content}</>;

export default TDP43;
