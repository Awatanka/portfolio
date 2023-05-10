import React from "react";
import { Box } from "@mui/material";
import wave from "../assets/wave.png";

const NewHero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${wave})`,
      }}
    ></Box>
  );
};

export default NewHero;
