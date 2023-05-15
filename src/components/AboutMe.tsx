import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import me from "../assets/me2.jpg";

const AboutMe: React.FC = () => {
  return (
    <>
      <Typography
        variant="h4"
        style={{
          padding: "30px",
          borderLeft: "3px solid #A5B3C7",
          margin: "20px 0",
        }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          marginTop: "20px",
        }}
      >
        <Box sx={{ flex: 1, paddingRight: "20px" }}>
          <Typography
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              margin: "20px 0",
              textAlign: "justify",
              lineHeight: "1.6",
              fontFamily: "sans-serif",
            }}
          >
            As a passionate web developer, I enjoy pushing boundaries and
            exploring new frontiers, whether that's in my work or on a hiking
            trail. Here, you'll find a showcase of my skills and projects that
            reflect my love for creativity and innovation.
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            What is my background? I have a PhD in Food Science and extensive
            experience in designing and building factories, as well as
            developing innovative food products. However, my passion for
            creative problem-solving and design has led me to explore the
            exciting world of web and application development. With my unique
            blend of expertise and creativity, I bring a fresh perspective to
            every project I work on. I'm a versatile individual who can adapt to
            different working styles and collaborate effectively with team
            members of all levels of experience. As a team player, I'm able to
            take direction from team leads while also contributing my own ideas
            and suggestions, ensuring that every project I work on is a success.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <motion.img
            src={me}
            alt="my photo"
            style={{
              width: "350px",
              borderRadius: "10px",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
