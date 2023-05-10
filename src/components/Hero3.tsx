import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const HeroContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: `url(${require("../assets/sea.jpg")})`,
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const HeroContent = styled(Box)({
  position: "relative",
  textAlign: "center",
  zIndex: 1,
});

const HeroTitle = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  fontSize: "4rem",
  marginBottom: "1rem",
});

const HeroSubtitle = styled(Typography)({
  color: "white",
  fontSize: "1.5rem",
});

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <HeroContainer>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
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
            transition={{ duration: 1, delay: 2 }}
          >
            <HeroSubtitle variant="h2">{subtitle}</HeroSubtitle>
          </motion.div>
        </HeroContent>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#373737",
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
