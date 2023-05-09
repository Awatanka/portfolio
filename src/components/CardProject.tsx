import { ArrowForward, GitHub, LinkedIn, WebAsset } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import imgUrl from "../assets/gym-photo2.png";
import { useState } from "react";

const bgColor = "#E6E5E1";

interface CardProjectProps {
  title: string;
  description: string;
  gitHubRef?: string;
  linkedInRef?: string;
  webRef?: string;
  picBg?: string;
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
    // writingMode: "vertical-lr",
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
  "&:before": {
    content: '""',
    zIndex: "99",
    position: "absolute",
    top: "-10px",
    left: "32px",
    display: "block",
    width: "16px",
    height: "16px",
    borderRadius: "16px",
    backgroundColor: bgColor,
  },
  "&:after": {
    content: '""',
    zIndex: "99",
    position: "absolute",
    bottom: "-10px",
    left: "32px",
    display: "block",
    width: "16px",
    height: "16px",
    borderRadius: "16px",
    backgroundColor: bgColor,
  },
  "& ul": {
    zIndex: "99",
    position: "absolute",
    left: "39px",
    top: "5px",
    listStyleType: "none",
    "& li": {
      width: "2px",
      height: "2px",
      borderRadius: "2px",
      margin: "6px 0",
      backgroundColor: bgColor,
    },
  },
  "& h2": {
    zIndex: "99",
    fontFamily: "Poppins, sans-serif",
    position: "absolute",
    bottom: "-40px",
    left: "0",
    fontSize: "55px",
    fontWeight: "700",
    color: "gray",
    pointerEvents: "none",
  },
  "& .arrow": {
    zIndex: "100",
    position: "absolute",
    right: "8px",
    bottom: "26px",
    cursor: "pointer",
    "&:hover": { transform: "scale(1.5)" },
  },

  "& .pic": {
    zIndex: "100",
    height: "280px",
    // backgroundImage: `url(${imgUrl})`,
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
    backgroundColor: "orange",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    mixBlendMode: "hard-light",
  },

  "&:hover button": {
    transform: "scale(10.5)",
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

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  gitHubRef,
  linkedInRef,
  webRef,
  picBg,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Container className="container">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
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
          <div
            style={{
              width: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div className="social"> */}
            <i className="icon" ref={gitHubRef} style={{ margin: "20px" }}>
              <GitHub
                style={{ fill: "#2F4F4F" }}
                className="icon-image"
                fontSize="large"
              />
            </i>
            <i className="icon" ref={linkedInRef} style={{ margin: "20px" }}>
              <LinkedIn
                style={{ fill: "#76ADAD" }}
                className="icon-image"
                fontSize="large"
              />
            </i>
            <i className="icon" ref={webRef} style={{ margin: "20px" }}>
              <WebAsset
                style={{ fill: "447272" }}
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
    </>
  );
};

export default CardProject;
