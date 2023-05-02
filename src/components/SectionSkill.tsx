import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

export const SectionSkills: FC = (): ReactElement => {
  const boxStyles = {
    height: "60px",
    padding: "10px",
    background: "",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  };

  const delay = 0.2; // delay between each box animation, in seconds
  const bounceClassName = {
    animation: `bounce 2s infinite ${delay}s`,
  };

  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <h3>My Skills</h3>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...bounceClassName,
            }}
          >
            <Box sx={{ ...boxStyles }}>
              <img
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                }
                alt="react logo"
                style={{ height: "100%" }}
              />
            </Box>
            <Typography>React</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...bounceClassName,
            }}
          >
            <Box
              sx={{
                ...boxStyles,
              }}
            >
              <img
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                }
                alt="scss logo"
                style={{ height: "100%" }}
              />
            </Box>
            <Typography>Sass</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...bounceClassName,
            }}
          >
            <Box sx={{ ...boxStyles }}>
              <img
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                }
                alt="react logo"
                style={{ height: "100%" }}
              />
            </Box>
            <Typography>React</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...bounceClassName,
              animationDelay: `${delay}s`,
            }}
          >
            <Box
              sx={{
                ...boxStyles,
              }}
            >
              <img
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                }
                alt="scss logo"
                style={{ height: "100%" }}
              />
            </Box>
            <Typography>Sass</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionSkills;
