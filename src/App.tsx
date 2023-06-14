import { useEffect, useState } from "react";
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

import { Helmet } from "react-helmet";

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
        <meta
          name="description"
          content="Welcome to my web developer portfolio!"
        />
        <meta property="og:title" content="Nataliia Sokolova's Portfolio" />
        <meta
          property="og:description"
          content="Check out Nataliia Sokolova's web developer portfolio."
        />
        <meta property="og:image" content="https://sokolova.ca/-og-image.jpg" />
      </Helmet>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Header window={undefined} />
        <main>
          <Home
            title={"Nataliia Sokolova"}
            subtitle={" <web developer/> you are looking for."}
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
