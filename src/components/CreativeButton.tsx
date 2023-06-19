import React from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

interface AnimatedButtonProps {
  color?: string;
}

const AnimatedButton = styled(motion.button)<AnimatedButtonProps>(
  ({ color, theme }) => ({
    border: "none",
    background: "none",
    margin: "20px",

    "@keyframes animate": {
      "0%": {
        transform: "translate(-50%, -75%) rotate(0deg)",
      },
      "100%": {
        transform: "translate(-50%, -75%) rotate(360deg)",
      },
    },

    "& a": {
      position: "relative",
      padding: "20px 50px",
      display: "block",
      textDecoration: "none",
      width: "200px",
      overflow: "hidden",
      borderRadius: "30px",
      transition: ".5s",

      "& span": {
        position: "relative",
        color: "#fff" || color,
        fontSize: "26px",
        width: "100%",
        fontFamily: "Roboto",
        letterSpacing: "3px",
        zIndex: 99,
      },

      "& .waves": {
        position: "absolute",
        top: "-80px",
        left: 0,
        width: "200px",
        height: "200px",
        boxShadow: "inset 0 0 50px rgba(0, 0, 0, .5)",
        transition: ".5s",
      },

      "& .waves::after, & .waves::before": {
        content: '""',
        width: "200%",
        height: "200%",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -75%)",
        background: "#000",
      },

      "& .waves::before": {
        borderRadius: "45%",
        background: "rgba(20, 20, 20, 0.2)",
        animation: "animate 5s linear infinite",
      },

      "& .waves::after": {
        borderRadius: "40%",
        background: "rgba(20, 20, 20, .5)",
        animation: "animate 10s linear infinite",
      },
    },

    "&:hover a .waves": {
      top: "-120px",
    },

    [theme.breakpoints.down("sm")]: {
      "& .waves": {
        position: "absolute",
        top: "-80px",
        left: 0,
        width: "150px",
        height: "100px",
        boxShadow: "inset 0 0 50px rgba(0, 0, 0, .5)",
        transition: ".5s",
      },
      "& a": {
        width: "150px",
      },
    },
  })
);

interface CreativeButtonProps {
  title: string;
  onClick?: () => void;
  isAnimated?: boolean;
}

const CreativeButton: React.FC<CreativeButtonProps> = ({
  title,
  isAnimated,
}) => {
  return (
    <>
      <AnimatedButton whileHover="hover" whileTap="tap">
        <a
          href="https://drive.google.com/file/d/14Ocl5hpprdI5Fcx3S8djvm0Wy_Ra4Jrh/view?usp=sharing"
          download="cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>{title}</span>
            <CloudDownloadIcon fontSize="large" style={{ color: "white" }} />
          </div>
          {isAnimated ? <div className="waves"></div> : null}
        </a>
      </AnimatedButton>
    </>
  );
};

export default CreativeButton;
