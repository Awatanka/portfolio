import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container maxWidth="lg">
        <ProjectSection />
        <SectionSkill />
      </Container>
      <Footer />
    </>
  );
}

export default App;
