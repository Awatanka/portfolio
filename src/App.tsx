import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import SectionIntro from "./components/SectionIntro";
import SectionSkillAnimation from "./components/SectionSkillAnimation";

function App() {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      ></Box>
      <SectionIntro />
      <SectionSkill />
      <SectionSkillAnimation />
      <Footer />
    </div>
  );
}

export default App;
