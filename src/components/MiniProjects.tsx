import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import { GitHub, OndemandVideo } from "@mui/icons-material";

interface FeaturedPostProps {
  projects: {
    stack: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    href?: string;
    git?: string;
  };
}

const iconStyles = {
  fill: "#76ADAD",
  "&:hover": {
    transform: "scale(1.5)",
  },
};

export default function MiniProjects(props: FeaturedPostProps) {
  const { projects } = props;

  return (
    <Box sx={{ margin: "60px 10px" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: "flex",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
            "&:hover": {
              boxShadow: "0 0 15px #C0D1D6",
              cursor: "pointer",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={projects.href} style={{ textDecoration: "none" }}>
              <CardMedia
                component="img"
                sx={{
                  width: 190,
                  // height: 190,
                  display: { xs: "none", sm: "block" },
                  margin: "12px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
                image={projects.image}
                alt={projects.imageLabel}
              />
            </a>
          </div>
          <CardContent sx={{ flex: 1 }}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                component="h2"
                sx={{
                  mb: 1,
                  left: "0",
                  fontSize: "30px",
                  padding: "5px 0",
                  fontWeight: "700",
                  color: "#248282",
                }}
              >
                {projects.title}
              </Typography>
              <Box
                className="icon-holder"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                {projects.git && (
                  <a
                    className="icon"
                    href={projects.git}
                    style={{ margin: "0 20px" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GitHub
                      style={{ fill: "#2F4F4F" }}
                      className="icon-image"
                      fontSize="large"
                    />
                  </a>
                )}

                {projects.href && (
                  <a
                    className="icon"
                    href={projects.href}
                    style={{ margin: "0 20px" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <OndemandVideo
                      style={iconStyles}
                      className="icon-image"
                      fontSize="large"
                    />
                  </a>
                )}
              </Box>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                fontSize: "16px",
                color: "#011A1D",
                fontWeight: "700",
                opacity: 0.8,
              }}
            >
              {projects.stack}
            </Typography>
            <Typography
              paragraph
              sx={{ mb: 2 }}
              style={{
                color: "#333",
                opacity: "0.8",
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              {projects.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
