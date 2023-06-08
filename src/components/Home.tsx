import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import CreativeButton from "./CreativeButton";

import seaBackground from "../assets/sea.jpg";

const rotatingWords = [
  "An innovative",
  "A collaborative",
  "A reliable",
  "A detail-oriented",
];

const HeroContainer = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${seaBackground})`,
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const HeroContent = styled("div")({
  position: "relative",
  textAlign: "center",
  zIndex: 1,
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "4rem",
  marginBottom: "1rem",
  textShadow: "0px 0px 0px rgba(255,255,255,0.9)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "26px",
  fontWeight: "300",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    margin: "15px",
  },
}));

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (currentWordIndex) => (currentWordIndex + 1) % rotatingWords.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <HeroContainer id="home">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <HeroTitle
                variant="h1"
                style={{ fontFamily: "fantasy", letterSpacing: "5px" }}
              >
                {title}
              </HeroTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <HeroSubtitle variant="h2">
                <motion.span
                  key={currentWordIndex}
                  initial={{
                    opacity: 0,
                    textShadow: "0px 0px 0px rgba(255,255,255,0.9)",
                  }}
                  animate={{
                    opacity: 1,
                    textShadow: "0px 0px 5px rgba(255,255,255,0.9)",
                  }}
                  exit={{
                    opacity: 0,
                    textShadow: "0px 0px 0px rgba(255,255,255,0.9)",
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeInOut",
                    staggerChildren: 0.1,
                  }}
                  style={{ display: "inline-block", color: "#fff" }}
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
                {subtitle}
              </HeroSubtitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                animate="animate"
              >
                <CreativeButton title={"CV"} />
              </motion.div>
            </motion.div>
          </HeroContent>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(55, 55, 55, 0.6)",
          }}
        />
      </HeroContainer>
    </>
  );
};

export default Hero;
