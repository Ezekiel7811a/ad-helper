import { ReactNode } from "react";

const Hypothesis = ({ children }: { children: ReactNode }) => {
  return <div className="text-green-200 text-lg">{children}</div>;
};

export default Hypothesis;
