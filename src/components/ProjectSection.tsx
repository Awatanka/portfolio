import React from "react";
import CardSection from "./CardSection";
import { Box, Typography } from "@mui/material";
import CardItem from "./CardItem";
import gymImage from "../assets/gym-photo2.png";
import eaSportImage from "../assets/ea-sport.png";
import vanCity from "../assets/vancity.png";
import rentsy from "../assets/rentsy.png";
import inStock from "../assets/inStock.png";
import CardProject from "./CardProject";

// import CardItem from "./CardItem";

const ProjectSection = () => {
  return (
    <>
      <Box sx={{ margin: "50px", display: "flex", flexDirection: "column" }}>
        <Typography>
          This project was devided into the 3 sprints. Overall, finished project
          represent website that: retrieve comment data from the provided API
          and display it on the page; user able to add new comments that are
          stored on the back-end using the API; new comments that are added
          display with the existing comments, the newest comments are at the
          top; pages display the shows data retrieved from the API; site
          responsive and closely resemble the provided mockups;
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gridAutoFlow: "row",
          gap: "25px",
        }}
      >
        <CardItem
          imageSrc={gymImage}
          altText="Alternative text for the image"
          title="This is content"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
        <CardItem
          imageSrc={gymImage}
          altText="Alternative text for the image"
          title="This is content"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        />
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
            "Tech Stack: React, Sass, TypeScript, Node.js, Express.js, Knex.js, API"
          }
          picBg={inStock}
        ></CardProject>
      </Box>
      <CardSection title={"Projects"} image={""}></CardSection>
    </>
  );
};

export default ProjectSection;
