import { MyNode } from "@/models/node";

const ImmuneActivation = new MyNode("ImmuneActivation", [], <div>bonjour</div>);

export const Wrapper = () => <>{ImmuneActivation.content}</>;

export default ImmuneActivation;
