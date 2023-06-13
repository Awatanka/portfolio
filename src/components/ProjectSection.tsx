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
import gymImage from "../assets/gym-photo2.png";
import eaSportImage from "../assets/ea-sport.png";
import vanCity from "../assets/vancity.png";
import rentsy from "../assets/rentsy.png";
import inStock from "../assets/inStock.png";
import rhizone from "../assets/rhizone.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "The Gym",
    description: "Tech Stack: HTML, Sass, JavaScript, API",
    picBg: gymImage,
    summary: [
      "Implemented features to retrieve comment data from an API and display it on the webpage.",
      "Enabled users to add new comments, which are stored on the backend using the API.",
      "Utilized JavaScript DOM manipulation and the flexbox layout to dynamically generate and render concert data from a JavaScript array into the HTML content.",
      "Implemented comment like and delete functionality, allowing users to like comments through a ❤️ and delete buttons that trigger an API request and update the DOM accordingly.",
    ],
    details: "3 sprints, personal project, 3 weeks",
    git: "https://github.com/Awatanka/sport_club",
  },
  {
    title: "rhi.zone",
    description: "Tech Stack: React, MUI, Node, Jest, Docker, MySQL, Express",
    picBg: rhizone,
    summary: [
      "Created a prototype and launched a new feature, that was developed, tested and launched in 2 months, for the education management system with a team of 8 developers using the Scrum methodology.",
      "Collaborated on APIs and managed software workflow using  Scrum methodology, increasing task success rate by 25%, wrote unit tests to detect bugs by increasing the over 35% efficiency rate.",
    ],
    details:
      "Team of 10 developers, 2 months, from product specification to 1 working prototype of feature",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },
  {
    title: "EA SharePlay",
    description: "Tech Stack: HTML, Sass, React",
    picBg: eaSportImage,
    summary: [
      "Participated in a cross-functional hackathon in partnership with Electronic Arts, where I contributed to a winning project that was recognized as the top solution out of 25 teams.",
      "Demonstrated strong communication and teamwork skills, collaborating effectively with a team of 3 developers and 3 UX designers.",
      "Developed a working prototype of the EA SharePlay feature within a 24-hour timeframe.",
    ],
    details:
      "Team of 3 developers and 3 UX designers, 24 hours, 1 working prototype of EA SharePlay feature",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },
  {
    title: "Rentsy",
    description:
      "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, MySQL, MUI, Bootstrap, Google Map API",
    picBg: rentsy,
    summary: [
      "Rentsy is a website for rental house hunting that provides additional information to save you time and effort during your search. It offers details such as nearby dog parks and crime rates.",
      "This full-stack application was built using public APIs and Google APIs to enhance the user experience and provide comprehensive data for making informed rental decisions.",
    ],
    details:
      "Team of 3 developers and 3 UX designers, 24 hours, 1 working prototype of EA SharePlay feature",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },
  {
    title: "Vancity for U",
    description: "Tech Stack: HTML, CSS, Bootstrap",
    picBg: vanCity,
    summary: [
      "I developed the Vancouver Tourism Website using a combination of HTML5, CSS3, and JavaScript.",
      "During the development process, I recognized the pivotal role this project played in my skill development journey. Its unique concept and thoughtfully designed interface made it an invaluable learning experience.",
      "Through careful design and development, I aimed to capture the essence of Vancouver and offer users a seamless and intuitive browsing experience.",
    ],
    details: "Team of 3 developers, my first project, 2 weeks",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },

  {
    title: "InStock",
    description:
      "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, API",
    picBg: inStock,
    summary: [
      // Add later summary items for InStock
    ],
    details:
      "Team of 3 developers and 3 UX designers, 24 hours, 1 working prototype of EA SharePlay feature",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },
  {
    title: "Portfolio",
    description: "Tech Stack: React, Sass, TypeScript, MUI, Framer Motion",
    picBg: portfolio,
    summary: [
      "I've carefully crafted this portfolio to impress and inspire. Whether you're a fellow developer seeking collaboration or an employer looking for top talent, my website reflects my dedication to excellence and my commitment to delivering exceptional results.",
    ],
    details: "Personal design, 2 weeks",
    git: "https://github.com/OpenTree-Education/rhizone-lms/tree/features/assessments",
  },
];

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
            user-friendly websites. From responsive designs to intuitive user
            interfaces, each project is a reflection of my dedication to
            delivering high-quality solutions that meet the needs of my clients
            and their users. So, take a look around and get inspired by the
            possibilities of what we can create together.
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
                        />
                      ) : (
                        <CardProject
                          title={project.title}
                          description={project.description}
                          picBg={project.picBg}
                          keyDetails={project.details}
                          gitHubRef={project.git}
                        />
                      )}
                    </motion.div>
                  )}
                </InView>
              </div>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProjectSection;
