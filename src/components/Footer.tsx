import React, { ReactElement } from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "#D3D7DF",
  color: theme.palette.primary.contrastText,
  padding: "2rem 0",
}));

const Footer: React.FC = (): ReactElement => {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton
              component="a"
              href="mailto:natalia.sokolova.ca@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#013B41" }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/natalia-sokolova-/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#013B41" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://github.com/Awatanka"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#013B41" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="body2" align="center">
              &copy; {new Date().getFullYear()} Nataliia Sokolova. All rights
              reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
