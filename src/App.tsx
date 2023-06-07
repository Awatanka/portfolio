import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import ProjectSection from "./components/ProjectSection";
import Home from "./components/Home";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollButtonThreshold = 200;

      if (scrollTop > scrollButtonThreshold) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />

      <Home
        title={"Nataliia Sokolova"}
        subtitle={" <web developer/> you are looking for."}
      />
      <Container maxWidth="lg">
        <About />
        <ProjectSection />
        <SectionSkill />
        <ContactSection />
      </Container>
      {showScrollButton && <ScrollToTopButton />}
      <Footer />
    </>
  );
}

export default App;
