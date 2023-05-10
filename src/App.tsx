import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import NewHero from "./components/NewHero";
import Hero3 from "./components/Hero3";

function App() {
  return (
    <>
      <Header />
      {/* <Hero />
      <NewHero /> */}
      <Hero3
        title={"Nataliia Sokolova"}
        subtitle={"Web developer, that you are looking for..."}
      />
      <Container maxWidth="lg">
        <ProjectSection />
        <SectionSkill />
      </Container>
      <Footer />
    </>
  );
}

export default App;
