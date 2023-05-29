import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Box, Typography, Button } from "@mui/material";

const AboutMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 30px",
        borderRadius: "50px",
      }}
    >
      <InView>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h5"
            style={{ padding: "10px 0", textAlign: "center" }}
          >
            Let's Talk!
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            I am always on the lookout for exciting projects or roles that
            require my expertise. If you have an idea that you would like to
            bring to life, let's work together and make it happen!{" "}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                margin: "20px 0",
                backgroundColor: "#ffd500",
              }}
            >
              Send email
            </Button>
          </Box>
        </motion.div>
      </InView>
    </Box>
  );
};

export default AboutMe;
