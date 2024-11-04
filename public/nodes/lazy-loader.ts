import { AlzheimerNode } from "./generics/ad";
import { ClassificationNode } from "./generics/classification";
import { Neurophysiology } from "./generics/neurophysiology";
import { EI } from "./neurophysiology/ei/ei";
import { Hyperexcitability } from "./neurophysiology/hyperexcitability/hyperexcitability";

export const lazyLoadNodes = () => {
  AlzheimerNode.links.push(ClassificationNode, Neurophysiology);
  Neurophysiology.links.push(AlzheimerNode, EI);
  ClassificationNode.links.push(AlzheimerNode);

  EI.links.push(Neurophysiology, Hyperexcitability);

  Hyperexcitability.links.push(EI);
};

lazyLoadNodes();
