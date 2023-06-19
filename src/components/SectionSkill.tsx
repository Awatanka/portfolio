import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  iconSrc: string;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const SectionSkill: FC = (): ReactElement => {
  const boxStyles = {
    height: "60px",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-out",
  };

  const skillsData: SkillsData = {
    frontend: [
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
    ],
    backend: [
      {
        name: "Node",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "MySql",
        iconSrc:
          "https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor",
      },
      {
        name: "Knex",
        iconSrc:
          "https://www.lanreakinola.dev/static/media/knex.03526424fd1de8026c75.webp",
      },
    ],
    tools: [
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
        name: "Figma",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "GitLab",
        iconSrc:
          "https://icongr.am/devicon/gitlab-original.svg?size=128&color=currentColor",
      },
    ],
  };

  const [refFrontend, inViewFrontend] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

  const [refBackend, inViewBackend] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

  const [refTools, inViewTools] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

  const renderSkills = (skills: Skill[], ref: any, inView: boolean) => (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
        padding: "0 5px",
        margin: "10px 40px",
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 }}
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
              padding: "20px 0",
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
  );

  return (
    <>
      <Typography
        variant="h4"
        style={{
          padding: "40px",
          borderLeft: "3px solid #A5B3C7",
          margin: "20px 0",
        }}
      >
        Skills
      </Typography>
      <div>
        <Typography
          variant="h5"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#333",
            opacity: "0.7",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          Frontend
        </Typography>
        {renderSkills(skillsData.frontend, refFrontend, inViewFrontend)}
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#333",
            opacity: "0.7",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          Backend
        </Typography>
        {renderSkills(skillsData.backend, refBackend, inViewBackend)}
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#333",
            opacity: "0.7",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          Tools
        </Typography>
        {renderSkills(skillsData.tools, refTools, inViewTools)}
      </div>
    </>
  );
};

export default SectionSkill;
