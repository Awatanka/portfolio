import { styled, keyframes } from "@mui/material/styles";
import React from "react";
import { Box, Typography } from "@mui/material";

const Hero: React.FC = () => {
  const wavesAnimation = keyframes`
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  `;

  const Waves = styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#2f4f4f",
    boxShadow: `inset 0 0 50px ${theme.palette.common.black},`,
    transition: "500ms",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: "300vw",
      height: "300vw",
      top: "-65vw",
      left: "50%",
      transform: "translate(-50%, -75%)",
      borderRadius: "44%",
      animation: `${wavesAnimation} 15s linear infinite`,
    },
    "&:before": {
      background: "rgba(51, 51, 51, 1)",
    },
    "&:after": {
      background: "rgba(51, 51, 51, 0.5)",
      animationDuration: "60s",
    },
  }));

  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#333333",
      }}
    >
      <Box sx={{ maxWidth: "600px", margin: "0 auto", padding: "0 20px" }}>
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            zIndex: 1,
            fontSize: "4.5rem",
            margin: "0 0 10px",
            lineHeight: 1,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Nataliia Sokolova
        </Typography>
        <Typography
          sx={{
            position: "relative",
            zIndex: 1,
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.5)",
            lineHeight: "1.4",
            maxWidth: "600px",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
          fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa
          ac turpis faucibus orci luctus non
        </Typography>
      </Box>
      <Waves />
    </Box>
  );
};

export default Hero;
