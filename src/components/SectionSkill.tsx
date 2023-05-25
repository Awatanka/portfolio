import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SectionSkill: FC = (): ReactElement => {
  const boxStyles = {
    height: "60px",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-out",
  };

  const skillsData = [
    {
      name: "HTML",
      iconSrc:
        "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
    },
    {
      name: "Sass",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "CSS",
      iconSrc:
        "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
    },
    {
      name: "JavaScript",
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      iconSrc:
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
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
      name: "MySql",
      iconSrc:
        "https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor",
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
      name: "Knex",
      iconSrc:
        "https://www.lanreakinola.dev/static/media/knex.03526424fd1de8026c75.webp",
    },
    {
      name: "GitLab",
      iconSrc:
        "https://icongr.am/devicon/gitlab-original.svg?size=128&color=currentColor",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

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
        ref={ref}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          padding: "0 5px",
          margin: "40px",
        }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.1 }}
            whileHover={{
              rotate: 360,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
          </motion.div>
        ))}
      </Box>
    </>
  );
};

export default SectionSkill;
