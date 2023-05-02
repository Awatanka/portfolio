import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkills from "./components/SectionSkill";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <SectionSkills />
      <Footer />
    </div>
  );
}

export default App;
