import { MyNode } from "@/models/node";

const RestingState = new MyNode(
  "Resting State",
  [],
  (
    <div>
      Koelewijn et al. (2017), which found a decreased resting state MEG
      functional connectivity in Alzheimer’s disease patients compared to
      healthy older subjects. Lopez et al. (2014) found, in a resting-state
      study, that the pMCI group exhibited a higher synchronization in the alpha
      band between the right anterior cingulate and temporo-occipital regions
      than sMCI subjects.
    </div>
  )
);

export const Wrapper = () => <>{RestingState.content}</>;

export default RestingState;
