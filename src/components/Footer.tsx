import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import wave from "../assets/wave.png";

export const Footer: FC = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          // backgroundColor: "#248282",
          backgroundImage: `url(${wave})`,
          backgroundSize: "105% 100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "white",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "right",
            flexDirection: "column",
          }}
        >
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <a href="mailto:natalia.sokolova.ca@gmail.com">
                <EmailIcon
                  component={EmailIcon}
                  style={{ color: "#76ADAD", margin: "10px", fontSize: 40 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-sokolova-/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  component={LinkedInIcon}
                  style={{ color: "#76ADAD", margin: "10px", fontSize: 40 }}
                />
              </a>
              <a
                href="https://github.com/Awatanka"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  component={GitHubIcon}
                  style={{ color: "#76ADAD", margin: "10px", fontSize: 40 }}
                />
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{ color: "#2F4F4F", margin: "10px", fontSize: 22 }}
            >
              <CopyrightIcon style={{ fontWeight: "300px" }} />
              {`Nataliia Sokolova ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
