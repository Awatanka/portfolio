import React from "react";
import CardSection from "./CardSection";
import { Box, Typography } from "@mui/material";
import gymImage from "../assets/gym-photo2.png";
import eaSportImage from "../assets/ea-sport.png";
import vanCity from "../assets/vancity.png";
import rentsy from "../assets/rentsy.png";
import inStock from "../assets/inStock.png";
import portfolio from "../assets/portfolio.png";
import CardProject from "./CardProject";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

const ProjectSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const projects = [
    {
      title: "The Gym",
      description: "Tech Stack: HTML, Sass, JavaScript, API",
      picBg: gymImage,
      summary: [
        "Implemented features to retrieve comment data from an API and display it on the webpage.",
        "Enabled users to add new comments, which are stored on the back-end using the API.",
        "Utilized JavaScript DOM manipulation and the flexbox layout to dynamically generate and render concert data from a JavaScript array into the HTML content.",
        "Implemented comment like and delete functionality, allowing users to like comments through a ❤️ and delete buttons that triggers an API request and updates the DOM accordingly.",
        "Implemented comment delete functionality, enabling users to remove comments through a delete button that interacts with the API and updates the DOM accordingly.",
      ],
      details: "3 sprints, personal project, 3 weeks",
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
        "the team of 3 developers and 3 UX designers, 24 hours, 1 working prototype of EA SharePlay feature",
    },
    {
      title: "Vancity for U",
      description: "Tech Stack: HTML, CSS, Bootstrap",
      picBg: vanCity,
      summary: [
        // Summary items for Vancity for U
      ],
    },
    {
      title: "Rentsy",
      description:
        "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, MySQL, MUI, Bootstrap, Google Map API",
      picBg: rentsy,
      summary: [
        // Summary items for Rentsy
      ],
    },
    {
      title: "InStock",
      description:
        "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, API",
      picBg: inStock,
      summary: [
        // Summary items for InStock
      ],
    },
    {
      title: "Portfolio",
      description: "Tech Stack: React, Sass, TypeScript, MUI, Framer Motion",
      picBg: portfolio,
      summary: [
        // Summary items for Portfolio
      ],
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InView>
          {" "}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {" "}
            <Typography
              variant="h4"
              style={{
                padding: "20px",
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
            {" "}
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
              delivering high-quality solutions that meet the needs of my
              clients and their users. So, take a look around and get inspired
              by the possibilities of what we can create together.
            </Typography>
          </motion.div>
        </InView>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gridAutoFlow: "row",
          gap: "40px",
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
                  <CardProject
                    title={project.title}
                    description={project.description}
                    picBg={project.picBg}
                    projectSummaryItems={project.summary}
                    keyDetails={project.details}
                  />
                </motion.div>
              )}
            </InView>
          </div>
        ))}
      </Box>
    </>
  );
};

export default ProjectSection;
