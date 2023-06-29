import { Box, Grid, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

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
      {
        name: "Mui",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Redux",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
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
      {
        name: "Express",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Docker",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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
      // {
      //   name: "Tableau",
      //   iconSrc: "https://icons8.com/icon/9Kvi1p1F0tUo/tableau-software",
      // },
      // {
      //   name: "Invision",
      //   iconSrc:
      //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg",
      // },
      // {
      //   name: "Auth0",
      //   iconSrc:
      //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/auth0/auth0-original.svg",
      // },
    ],
  };

  const softSkills = [
    "Product Thinking",
    "Learning on the Fly",
    "Interpersonal Awareness",
    "Following Directions",
    "Driving Alignment",
    "Conveying role value",
    "Customer-oriented",
    "Handling change",
  ];

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

      <InView>
        {({ ref, inView }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Box py={4} borderRadius={10}>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    style={{
                      color: "#333",
                      opacity: "0.7",
                      fontSize: "24px",
                      letterSpacing: "1px",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Soft Skills
                  </Typography>
                </Grid>
                {softSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      borderRadius={10}
                      bgcolor="white"
                      p={2}
                      border={1}
                      borderColor={"ButtonShadow"}
                    >
                      <Typography
                        variant="body1"
                        align="center"
                        style={{
                          color: "#333",
                          opacity: "0.7",
                          fontSize: "16px",
                          letterSpacing: "0.5px",
                          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default SectionSkill;
