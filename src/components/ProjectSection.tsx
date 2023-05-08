import React from "react";
import CardSection from "./CardSection";
import { Box, Typography } from "@mui/material";
import CardItem from "./CardItem";

type CardSectionProps = {
  image: string;
  title: string;
};

const ProjectSection = () => {
  return (
    <>
      <Box sx={{ margin: "50px", display: "flex", flexDirection: "column" }}>
        <CardSection image={""} title={"The Gym"}></CardSection>
        <Typography>
          This project was devided into the 3 sprints. Overall, finished project
          represent website that: retrieve comment data from the provided API
          and display it on the page; user able to add new comments that are
          stored on the back-end using the API; new comments that are added
          display with the existing comments, the newest comments are at the
          top; pages display the shows data retrieved from the API; site
          responsive and closely resemble the provided mockups;
        </Typography>

        <Typography>
          This project was devided into the 3 sprints. Overall, finished project
          represent website that: retrieve comment data from the provided API
          and display it on the page; user able to add new comments that are
          stored on the back-end using the API; new comments that are added
          display with the existing comments, the newest comments are at the
          top; pages display the shows data retrieved from the API; site
          responsive and closely resemble the provided mockups;
        </Typography>
        <CardItem />
      </Box>
    </>
  );
};

export default ProjectSection;
