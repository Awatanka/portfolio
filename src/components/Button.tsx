import React from "react";
import { styled } from "@mui/material/styles";
import { motion, Transition, Variants } from "framer-motion";
import { ButtonProps } from "@mui/material";

const AnimatedButton = styled(motion.button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  background: "#1A686F",
  margin: "20px",
  height: "50px",
  border: "none",
  hight: "50px",
  borderRadius: "10px",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    opacity: 0,
    pointerEvents: "none",
    zIndex: 1,
    borderRadius: "10px",
    boxShadow:
      "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #f6d365, 0 0 70px #f6d365, 0 0 80px #f6d365, 0 0 100px #f6d365, 0 0 150px #f6d365",
    animation: "glow 1.5s ease-in-out infinite",
  },
  "&:hover::after": {
    opacity: 0.5,
  },
}));

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
