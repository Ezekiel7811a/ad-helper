import { ReactNode } from "react";

const Hypothesis = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div
      className="text-lg"
      style={{
        color: "var(--color-hypothesis)",
      }}
    >
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Hypothesis;
