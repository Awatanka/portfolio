import React, { useState } from "react";
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
import ReactCardFlip from "react-card-flip";

const ProjectSection = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      {/* <Typography variant="h4" style={{ padding: "10px 0" }}>
        Projects
      </Typography> */}
      <Box sx={{ margin: "50px", display: "flex", flexDirection: "column" }}>
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <Typography>
            <Typography variant="h4" style={{ padding: "10px 0" }}>
              Welcome to my projects section!{" "}
            </Typography>
            Here, you can explore some of my latest web development projects
            that showcase my skills and passion for creating engaging and
            user-friendly websites. From responsive designs to intuitive user
            interfaces, each project is a reflection of my dedication to
            delivering high-quality solutions that meet the needs of my clients
            and their users. So, take a look around and get inspired by the
            possibilities of what we can create together.
          </Typography>
        </motion.div>
        <motion.div
          animate={{
            x: ["100px", "0px", "100px"],
          }}
        >
          Weeee I'm animated
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gridAutoFlow: "row",
          gap: "80px",
          margin: "auto 0",
        }}
      >
        {" "}
        <CardProject
          title={"The Gym"}
          description={"Tech Stack: HTML, Sass, JavaScript, API"}
          picBg={gymImage}
        ></CardProject>
        <CardProject
          title={"EA SharePlay"}
          description={"Tech Stack: HTML, Sass, React"}
          picBg={eaSportImage}
        ></CardProject>
        <CardProject
          title={"Vancity for U"}
          description={"Tech Stack: HTML, CSS, Bootstrap"}
          picBg={vanCity}
        ></CardProject>
        <CardProject
          title={"Rentsy"}
          description={
            "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, MySQL, MUI, Bootstrap, Google Map API"
          }
          picBg={rentsy}
        ></CardProject>
        <CardProject
          title={"InStock"}
          description={
            "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, API"
          }
          picBg={inStock}
        ></CardProject>
        <CardProject
          title={"Portfolio"}
          description={
            "Tech Stack: React, Sass, TypeScript, MUI, Framer Motion"
          }
          picBg={portfolio}
        ></CardProject>
      </Box>

      <CardSection title={"Projects"} image={""}></CardSection>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={{
            backgroundColor: "green",
            height: 100,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          How do you define the meaning of success?
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div
          style={{
            backgroundColor: "red",
            height: 100,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Create video tutorials on YouTube
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ProjectSection;