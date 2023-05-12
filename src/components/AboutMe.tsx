import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import me from "../assets/me2.jpg";

const AboutMe: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        marginTop: "20px",
      }}
    >
      <Typography variant="h4" style={{ padding: "10px 0" }}>
        About Me
      </Typography>
      <Typography variant="body1" style={{ fontSize: "18px" }}>
        I am a versatile individual with a PhD in Food Science and extensive
        experience in teaching how to design and build factories and develop
        innovative food products. My passion for creative problem-solving and
        design has led me to explore the exciting world of web and application
        development. With my unique blend of expertise and creativity, I bring a
        fresh perspective to every project I work on. I possess a strong ability
        to adapt to different working styles and collaborate effectively with
        team members of all levels of experience. As a team player, I am able to
        take direction from team leads while also contributing my own ideas and
        suggestions, ensuring that every project I work on is a success.
      </Typography>
      <motion.img
        src={me}
        alt="my photo"
        style={{
          width: "400px",
          borderRadius: "10px",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </Box>
  );
};

export default AboutMe;
