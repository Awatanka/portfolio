import { ArrowForward, GitHub, OndemandVideo } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface CardProjectProps {
  title: string;
  description: string;
  gitHubRef?: string;
  linkedInRef?: string;
  webRef?: string;
  picBg?: string;
  projectSummaryItems?: string[];
  cardBody?: string;
  keyDetails?: string;
}

const Container = styled("div")(({ theme }) => ({
  width: "500px",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",

  "& .social": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "180px",
  },
  "& p": {
    color: "#333",
    opacity: "0.7",
    fontSize: "14px",
    letterSpacing: "1px",
    margin: "5px 25px",
    transition: "all 0.2s ease",
  },
  "& .icon": {
    margin: "20px 0",
  },
  "& .icon-image": {
    "&:hover": {
      fill: "#2F4F4F",
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  "& .icon-holder": {
    width: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margine: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "275px",
    height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: theme.shadows[2],
  },
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 15px #C0D1D6",
    borderRadius: "10px",
  },
}));

const Card = styled("div")(({ theme }) => ({
  position: "relative",
  width: "380px",
  height: "320px",
  backgroundColor: "#fff",
  overflow: "hidden",
  marginBottom: "4px",
  marginLeft: "40px",

  "& h2": {
    zIndex: "99",
    fontFamily: "Poppins, sans-serif",
    position: "absolute",
    bottom: "-50px",
    left: "0",
    fontSize: "45px",
    padding: "5px 0",
    fontWeight: "700",
    color: "#248282",
    pointerEvents: "none",
  },
  "& .arrow": {
    zIndex: "100",
    position: "absolute",
    right: "8px",
    bottom: "6px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.5)",
      transition: "transform 0.2s ease-in-out",
    },
  },

  "& .pic": {
    zIndex: "100",
    height: "245px",
    width: "400px",
    marginTop: "20px",
    backgroundSize: "100% 100%",
    filter: "grayscale(100%)",
  },

  "& .social i:nth-of-type(1)": {
    transitionDelay: "0.4s",
  },

  "& button": {
    position: "absolute",
    right: "0px",
    bottom: "2px",
    width: "50px",
    height: "50px",
    backgroundColor: "#daa520",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    mixBlendMode: "hard-light",
  },

  "&:hover button": {
    transform: "scale(8.5)",
  },
  "&:hover p": {
    color: "black",
  },
  "&:hover .pic": {
    filter: "grayscale(0)",
  },
  "&:hover i": {
    opacity: 1,
    transform: " scale(1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "225px",
    height: "185px",
    "& h2": {
      zIndex: "99",
      fontFamily: "Poppins, sans-serif",
      position: "absolute",
      bottom: "-26px",
      left: "0",
      fontSize: "25px",
      fontWeight: "700",
      color: "#248282",
      pointerEvents: "none",
    },
    "& .pic": {
      zIndex: "100",
      width: "250px",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(100%)",
    },
  },
}));

const CardFlipped = styled("div")({
  "& h2": {
    fontFamily: "Poppins, sans-serif",
    fontSize: "50px",
    fontWeight: "700",
    color: "#248282",
  },
});

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  gitHubRef,
  webRef,
  picBg,
  projectSummaryItems,
  cardBody,
  keyDetails,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const iconFontSize = isSmallScreen ? "medium" : "large";
  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerStyle={{ margin: "0 auto" }}
      >
        <Container className="container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100%" }}>
              <div
                onClick={handleClick}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Card className="card">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <h2>{title}</h2>
                    <i className="arrow">
                      <ArrowForward fontSize={"large"} />
                    </i>
                  </div>
                  <div
                    className="pic"
                    style={{ backgroundImage: `url(${picBg})` }}
                  ></div>

                  <button></button>
                </Card>
              </div>
            </div>
            <div className="icon-holder">
              <a className="icon" href={gitHubRef}>
                <GitHub
                  style={{ fill: "#2F4F4F" }}
                  className="icon-image"
                  fontSize={iconFontSize}
                />
              </a>
              <a className="icon" href={webRef}>
                <OndemandVideo
                  style={{ fill: "#76ADAD" }}
                  className="icon-image"
                  fontSize={iconFontSize}
                />
              </a>
            </div>
          </div>

          <div className="stack">
            <p>{description}</p>
          </div>
        </Container>
        <Container>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <CardFlipped className="card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box style={{ fontSize: "10px", padding: 0 }}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "700", color: "#248282" }}
                  >
                    {title}
                  </Typography>
                  {projectSummaryItems && projectSummaryItems.length > 0 ? (
                    <List>
                      {projectSummaryItems.map((sum, index) => {
                        return (
                          <ListItem key={index} style={{ padding: 0 }}>
                            <ListItemText
                              secondary={sum}
                              style={{ padding: 0 }}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : null}
                  {cardBody && (
                    <Typography variant="body1">{cardBody}</Typography>
                  )}
                  {keyDetails && (
                    <>
                      <Typography
                        style={{
                          margin: 0,
                          fontSize: "16px",
                          color: "#011A1D",
                          fontWeight: "700",
                        }}
                      >
                        Key details:
                      </Typography>
                      <Typography variant="body1">{keyDetails}</Typography>
                    </>
                  )}
                </Box>
              </div>
            </CardFlipped>
          </button>
        </Container>
      </ReactCardFlip>
    </>
  );
};

export default CardProject;
