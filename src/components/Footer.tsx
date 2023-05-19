import React, { ReactElement } from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WaveImage from "../assets/wave.png";

const Footer: React.FC = (): ReactElement => {
  return (
    <Box
      sx={{
        height: "auto",
        backgroundImage: `url(${WaveImage})`,
        backgroundSize: "105% 100%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <IconButton
              component="a"
              href="mailto:natalia.sokolova.ca@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#76ADAD", fontSize: 40 }}
            >
              <EmailIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/natalia-sokolova-/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#76ADAD", fontSize: 40 }}
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://github.com/Awatanka"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#76ADAD", fontSize: 40 }}
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h6" style={{ color: "#2F4F4F", fontSize: 22 }}>
              &copy; Nataliia Sokolova {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
