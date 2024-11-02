import { MyNode } from "@/models/node";
import { ClassificationNode } from "./classification";

export const AlzheimerNode = new MyNode(
  "Alzheimer's Disease",
  [ClassificationNode],
  <div>Bonjour</div>
);
