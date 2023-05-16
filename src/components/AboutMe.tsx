import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

import me from "../assets/me2.jpg";

const AboutMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
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
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          <Box>
            As a passionate web developer, I enjoy pushing boundaries and
            exploring new frontiers, whether that's in my work or on a hiking
            trail. Here, you'll find a showcase of my skills and projects that
            reflect my love for creativity and innovation.
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              justifyContent: "center",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                gap: "20px",
              },
            }}
          >
            <motion.img
              src={me}
              alt="my photo"
              style={{
                width: "350px",
                borderRadius: "10px",
                margin: "auto",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              whileTap={{ scale: 0.9 }}
            />
            <Box>
              <Typography
                variant="h5"
                style={{
                  margin: "20px 0",
                }}
              >
                What is my story?
              </Typography>
              My journey began with a PhD in Food Science and extensive
              experience in designing and building factories, as well as
              developing innovative food products. However, my passion for
              creative problem-solving and design has led me to explore the
              exciting world of web and application development. I'm a versatile
              individual who can adapt to different working styles and
              collaborate effectively with team members of all levels of
              experience. I thrive in team environments and value collaboration,
              taking direction from team leads while also contributing my own
              ideas and suggestions. With my strong problem-solving skills and
              attention to detail, I ensure that every project I work on is a
              success.
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default AboutMe;
