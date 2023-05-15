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

  const delay = 0.2;
  // const bounceClassName = {
  //   animation: `bounce 3s infinite ${delay}s`,
  //   "@keyframes bounce": {
  //     "0%": {
  //       transform: "translateY(0)",
  //     },
  //     "50%": {
  //       transform: "translateY(-10px)",
  //     },
  //     "100%": {
  //       transform: "translateY(0)",
  //     },
  //   },
  // };

  const hoverStyles = {
    transform: "scale(1.1)",
  };

  const skillsData = [
    {
      name: "JavaScript",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Sass",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "React",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Git",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jest",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Node",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Figma",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "TypeScript",
      iconSrc:
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
    },
    {
      name: "Knex",
      iconSrc:
        "https://www.lanreakinola.dev/static/media/knex.03526424fd1de8026c75.webp",
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        style={{
          padding: "20px",
          borderLeft: "3px solid #A5B3C7",
          margin: "20px 0",
          color: "#013B41",
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          padding: "0 5px",
          margin: "40px",
        }}
      >
        {skillsData.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // ...bounceClassName,
              "&:hover": {
                ...hoverStyles,
              },
            }}
          >
            <Box sx={{ ...boxStyles }}>
              <img
                src={skill.iconSrc}
                alt={`${skill.name} logo`}
                style={{ height: "100%" }}
              />
            </Box>
            <Typography>{skill.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SectionSkill;
