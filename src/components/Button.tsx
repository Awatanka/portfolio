import React from "react";
import { styled } from "@mui/material/styles";
import { motion, Transition, Variants } from "framer-motion";

interface AnimatedButtonProps {
  color?: string;
}

const AnimatedButton = styled(motion.button)<AnimatedButtonProps>(
  ({ theme, color }) => ({
    position: "relative",
    overflow: "hidden",
    background: color || "#9FA1B1",
    height: "50px",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    // "&::after": {
    //   content: '""',
    //   position: "absolute",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   width: "12px",
    //   height: "12px",
    //   background: "#fff",
    //   borderRadius: "50%",
    //   boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    //   opacity: 0,
    //   transition: "opacity 0.3s ease",
    // },
    "&:hover::after": {
      opacity: 1,
    },
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   width: "30px",
    //   height: "1px",
    //   background: "#fff",
    //   opacity: 0,
    //   transition: "opacity 0.3s ease",
    // },
    "&:hover::before": {
      opacity: 1,
    },
    "&::before, &::after": {
      pointerEvents: "none",
    },
  })
);

interface CreativeButtonProps {
  title: string;
}

const CreativeButton: React.FC<CreativeButtonProps> = ({ title }) => {
  const buttonVariants: Variants = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };

  const buttonTransition: Transition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <AnimatedButton
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      transition={buttonTransition}
    >
      {title}
    </AnimatedButton>
  );
};

export default CreativeButton;
