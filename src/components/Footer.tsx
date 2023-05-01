import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#CEC4CE",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CopyrightIcon style={{ fontWeight: "300px" }} />
            <Typography color="black" variant="h6">
              {`Nataliia Sokolova ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item>
            <a href="mailto:natalia.sokolova.ca@gmail.com">
              <EmailIcon
                component={EmailIcon}
                style={{ color: "#2A3439", margin: "10px", fontSize: 40 }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/natalia-sokolova-/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                component={LinkedInIcon}
                style={{ color: "#2A3439", margin: "10px", fontSize: 40 }}
              />
            </a>
            <a
              href="https://github.com/Awatanka"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                component={GitHubIcon}
                style={{ color: "#2A3439", margin: "10px", fontSize: 40 }}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
