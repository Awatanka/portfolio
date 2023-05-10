import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import CardSection from "./CardSection";

export const SectionSkill: FC = (): ReactElement => {
  const boxStyles = {
    height: "60px",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-out",
  };

  //   const delay = 0.2;
  //   const bounceClassName = {
  //     animation: `bounce 3s infinite ${delay}s`,
  //     "@keyframes bounce": {
  //       "0%": {
  //         transform: "translateY(0)",
  //       },
  //       "50%": {
  //         transform: "translateY(-10px)",
  //       },
  //       "100%": {
  //         transform: "translateY(0)",
  //       },
  //     },
  //   };

  const hoverStyles = {
    transform: "scale(1.1)",
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          padding: "0 5px",
          margin: "150px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
            "&:hover": {
              ...hoverStyles,
            },
          }}
        >
          <Box sx={{ ...boxStyles }}>
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              alt="react logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>JavaScript</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
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
            //   ...bounceClassName,
            //   animationDelay: `${delay}s`,
          }}
        >
          <Box
            sx={{
              ...boxStyles,
            }}
          >
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              }
              alt="scss logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Bootstrap</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box sx={{ ...boxStyles }}>
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              }
              alt="react logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Git</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box
            sx={{
              ...boxStyles,
            }}
          >
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              }
              alt="scss logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Jest</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box sx={{ ...boxStyles }}>
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              }
              alt="react logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Node</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box
            sx={{
              ...boxStyles,
            }}
          >
            <img
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              }
              alt="scss logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Figma</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box
            sx={{
              ...boxStyles,
            }}
          >
            <img
              src={
                "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
              }
              alt="scss logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>TypeScript</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   ...bounceClassName,
          }}
        >
          <Box
            sx={{
              ...boxStyles,
            }}
          >
            <img
              src={
                "https://www.lanreakinola.dev/static/media/knex.03526424fd1de8026c75.webp"
              }
              alt="scss logo"
              style={{ height: "100%" }}
            />
          </Box>
          <Typography>Knex</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SectionSkill;
