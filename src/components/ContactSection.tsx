import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";

const AboutMe: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "60%",
        height: "300px",
        // background: "rgb(47, 79, 79, 0.7)",
        // borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 30px",
        borderRadius: "50px",
      }}
    >
      <Typography variant="h4" style={{ padding: "10px 0" }}>
        Let's Collaborate!
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        I am a skilled Software Developer with a passion for creating innovative
        solutions. I am always on the lookout for exciting projects or roles
        that require my expertise. If you have an idea that you would like to
        bring to life, let's work together and make it happen!
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{ marginTop: "20px", backgroundColor: "#FDB813" }}
      >
        Send email
      </Button>
    </Box>
  );
};

export default AboutMe;
