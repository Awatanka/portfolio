import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CardProject from "./CardProject";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import MiniProjects from "./MiniProjects";
import { projects, miniProjects } from "../data/projectsData";

const ProjectSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-180px 0px",
  });

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <>
      <Box sx={{ marginTop: "60px" }} id="projects">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            style={{
              padding: "40px",
              borderLeft: "3px solid #A5B3C7",
              margin: "20px 0",
              color: "#013B41",
            }}
          >
            Welcome to my projects section!
          </Typography>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography
            style={{
              padding: "20px 0",
              margin: "20px 0",
              color: "#013B41",
              fontSize: "18px",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            Here, you can explore some of my latest web development projects
            that showcase my skills and passion for creating engaging and
            user-friendly websites. So, take a look around and get inspired by
            the possibilities of what we can create together.
          </Typography>
        </motion.div>
        <Container style={{ margin: "0 auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isLargeScreen
                ? "repeat(auto-fit, minmax(500px, 2fr))"
                : null,
              gridAutoFlow: "row",
              gap: "50px",
              margin: "auto 0",
            }}
          >
            {projects.map((project, index) => (
              <div key={index} style={{ margin: "0 auto" }}>
                <InView>
                  {({ ref, inView }) => (
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1 }}
                    >
                      {isLargeScreen ? (
                        <CardProject
                          title={project.title}
                          description={project.description}
                          picBg={project.picBg}
                          projectSummaryItems={project.summary}
                          keyDetails={project.details}
                          gitHubRef={project.git}
                          webRef={project.web}
                        />
                      ) : (
                        <CardProject
                          title={project.title}
                          description={project.description}
                          picBg={project.picBg}
                          keyDetails={project.details}
                          gitHubRef={project.git}
                          webRef={project.web}
                        />
                      )}
                    </motion.div>
                  )}
                </InView>
              </div>
            ))}
          </Box>
          <InView>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <Typography
                  variant="h4"
                  style={{
                    padding: "30px",
                    borderLeft: "3px solid #A5B3C7",
                    margin: "40px 0",
                    color: "#013B41",
                  }}
                >
                  Mini-projects
                </Typography>
              </motion.div>
            )}
          </InView>

          {miniProjects.map((project, index) => (
            <div key={index} style={{ margin: "0 auto" }}>
              <InView>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5 }}
                  >
                    <MiniProjects projects={project} />
                  </motion.div>
                )}
              </InView>
            </div>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ProjectSection;
