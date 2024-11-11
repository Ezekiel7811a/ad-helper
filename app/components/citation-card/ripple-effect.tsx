import { useState, MouseEvent, ReactNode } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleEffectButtonProps {
  children: ReactNode;
}

export const RippleEffectButton: React.FC<RippleEffectButtonProps> = ({
  children,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove the ripple after animation ends
    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((r) => r.id !== newRipple.id)
      );
    }, 600); // Duration of the ripple animation
  };

  return (
    <div className="ripple-container flex" onClick={handleMouseEnter}>
      <ExpandCircleDownIcon />
      <span className="flex flex-col gap-y-12">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "100px", // Adjust the initial size
            height: "100px",
          }}
        ></span>
      ))}
    </div>
  );
};

export default RippleEffectButton;
