import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSkill from "./components/SectionSkill";
import ProjectSection from "./components/ProjectSection";
import Home from "./components/Home";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Portfolio from "./components/Portfolio";
import { Helmet } from "react-helmet";
import img from "./assets/sea.jpg";

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

  const defaultTheme = createTheme();

  return (
    <>
      <Helmet>
        <title>Nataliia Sokolova - Web Developer Portfolio</title>
        <meta property="og:url" content="http://sokolova.ca" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nataliia Sokolova's Portfolio" />

        <meta
          name="description"
          content="Welcome to my web developer portfolio!"
        />

        <meta property="og:image" content={img} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Header window={undefined} />
        <main>
          <Home
            title={"Nataliia Sokolova"}
            subtitle={"<web developer/> you are looking for."}
          />
          <Container maxWidth="lg">
            <About />
            <ProjectSection />
            <SectionSkill />
            <ContactSection />
            {showScrollButton && <ScrollToTopButton />}
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
