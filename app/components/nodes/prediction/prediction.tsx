import { MyNode } from "@/models/node";

const Prediction = new MyNode(
  "Prediction",
  [],
  (
    <div>
      (S Pusil et al. 2019) have shown that using temporal synchronization
      accross frequency bands can predict MCI progression to AD.
    </div>
  )
);

export const Wrapper = () => <>{Prediction.content}</>;

export default Prediction;
