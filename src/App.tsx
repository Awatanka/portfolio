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

function createOpenGraphMetaTags(
  img: string,
  imageType: string,
  imageWidth: string,
  imageHeight: string,
  url: string,
  title: string
) {
  const metaTags = [
    { property: "og:image", content: img },
    { property: "og:image:type", content: imageType },
    { property: "og:image:width", content: imageWidth },
    { property: "og:image:height", content: imageHeight },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
  ];

  const head = document.head;
  const firstChild = head.firstChild;

  metaTags.forEach(({ property, content }) => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    metaTag.setAttribute("content", content);
    head.insertBefore(metaTag, firstChild);
  });
}

const img = imageLogo;
const url = "http://sokolova.ca";
const title = "Nataliia Sokolova's Portfolio";
const imageType = "image/jpeg";
const imageWidth = "1200";
const imageHeight = "630";

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
  console.log(metaTags);
}

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    updateMetaTags();
    createOpenGraphMetaTags(
      img,
      imageType,
      imageWidth,
      imageHeight,
      url,
      title
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
        <Header />{" "}
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
