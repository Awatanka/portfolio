import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import ProjectSection from "./components/ProjectSection";
import Hero3 from "./components/Hero3";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Header />
      {/* <Hero />
      <NewHero /> */}
      <Hero3
        title={"Nataliia Sokolova"}
        subtitle={" <web developer/> you are looking for."}
      />
      <Container maxWidth="lg">
        <AboutMe />
        <ProjectSection />
        <SectionSkill />
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;
