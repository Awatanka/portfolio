import { ArrowForward, GitHub, OndemandVideo } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface CardProjectProps {
  title: string;
  description: string;
  gitHubRef?: string;
  linkedInRef?: string;
  webRef?: string;
  picBg?: string;
  projectSummaryItems?: [];
  cardBody?: string;
}

const Container = styled("div")({
  width: "550px",
  height: "450px",
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
  "& .icon-image": {
    "&:hover": {
      fill: "#2F4F4F",
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
});

const Card = styled("div")({
  position: "relative",
  width: "450px",
  height: "370px",
  backgroundColor: "#fff",
  overflow: "hidden",
  marginBottom: "4px",

  "& h2": {
    zIndex: "99",
    fontFamily: "Poppins, sans-serif",
    position: "absolute",
    bottom: "-25px",
    left: "0",
    fontSize: "50px",
    fontWeight: "700",
    color: "#248282",
    pointerEvents: "none",
  },
  "& .arrow": {
    zIndex: "100",
    position: "absolute",
    right: "8px",
    bottom: "26px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.5)",
      transition: "transform 0.2s ease-in-out",
    },
  },

  "& .pic": {
    zIndex: "100",
    height: "280px",
    backgroundSize: "105% 100%",
    filter: "grayscale(100%)",
  },

  "& .social i:nth-of-type(1)": {
    transitionDelay: "0.4s",
  },

  "& .dr": {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    width: "100px",
  },

  "& button": {
    position: "absolute",
    right: "0px",
    bottom: "26px",
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
});

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
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerStyle={{ margin: "0 auto" }}
      >
        <Container className="container">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <button
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
              </button>
            </div>
            <div
              style={{
                width: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <i className="icon" ref={gitHubRef} style={{ margin: "20px" }}>
                <GitHub
                  style={{ fill: "#2F4F4F" }}
                  className="icon-image"
                  fontSize="large"
                />
              </i>
              <i className="icon" ref={webRef} style={{ margin: "20px" }}>
                <OndemandVideo
                  style={{ fill: "#76ADAD" }}
                  className="icon-image"
                  fontSize="large"
                />
              </i>
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
                  <h2>{title}</h2>
                  {projectSummaryItems && projectSummaryItems.length > 0 ? (
                    <List>
                      {projectSummaryItems.map((sum, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            secondary={sum}
                            style={{ padding: 0 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                  <Typography variant="body1">{cardBody}</Typography>
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
