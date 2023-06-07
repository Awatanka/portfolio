import React from "react";
import { IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "150px",
        right: "20px",
        zIndex: "9999",
        backgroundColor: "#fff",
        opacity: "0.4",
        border: "1px solid #535d66",
      }}
    >
      <KeyboardArrowUp />
    </IconButton>
  );
};

export default ScrollToTopButton;
