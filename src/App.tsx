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
import imageLogo from "./assets/mylogo.png";

function updateMetaTags() {
  const metaTags = document.getElementsByTagName("meta");
  for (let i = 0; i < metaTags.length; i++) {
    const metaTag = metaTags[i];
    if (metaTag.getAttribute("name") === "description") {
      metaTag.setAttribute("content", "Welcome to my web developer portfolio!");
    }
    if (metaTag.getAttribute("name") === "theme-color") {
      metaTag.setAttribute("content", "#013B41");
    }
  }
}

function createOpenGraphMetaTags(
  img: string,
  imageType: string,
  imageWidth: string,
  imageHeight: string,
  url: string,
  title: string
) {
  const head = document.head;
  const existingMetaTags = head.querySelectorAll('meta[property^="og:"]');

  if (existingMetaTags.length > 0) {
    existingMetaTags.forEach((metaTag) => {
      head.removeChild(metaTag);
    });
  }

  const metaTags = [
    { property: "og:title", content: title },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { property: "og:image:type", content: imageType },
    { property: "og:image:width", content: imageWidth },
    { property: "og:image:height", content: imageHeight },
  ];

  const titleTag = document.querySelector("title");
  const firstChild = titleTag ? titleTag.nextElementSibling : null;

  metaTags.forEach(({ property, content }) => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    metaTag.setAttribute("content", content);
    if (firstChild) {
      head.insertBefore(metaTag, firstChild);
    } else {
      head.appendChild(metaTag);
    }
  });
}

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    updateMetaTags();
    createOpenGraphMetaTags(
      imageLogo,
      "image/jpeg",
      "1200",
      "630",
      "http://sokolova.ca",
      "Nataliia Sokolova's Portfolio"
    );
  }, []);

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
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Header />
        <main style={{ position: "static" }}>
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
