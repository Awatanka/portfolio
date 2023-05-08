import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const GlobalStyle = styled(Box)({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#43345d",
    minHeight: "800px",
  },
});

const Container = styled(Box)({
  position: "relative",
  width: "1100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "30px",
});

const Card = styled(Paper)({
  position: "relative",
  maxWidth: "300px",
  height: "215px",
  backgroundColor: "#fff",
  margin: "30px 10px",
  padding: "20px 15px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
  transition: "0.3s ease-in-out",
  borderRadius: "15px",
  "&:hover": {
    height: "320px",
  },
});

const Image = styled(Box)({
  position: "relative",
  width: "260px",
  height: "260px",
  top: "-40%",
  left: "8px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  zIndex: 1,
});

const ImageWrapper = styled("img")({
  maxWidth: "100%",
  borderRadius: "15px",
});

const Content = styled(Box)({
  position: "relative",
  top: "-140px",
  padding: "10px 15px",
  color: "#111",
  textAlign: "center",
  visibility: "hidden",
  opacity: 0,
  transition: "0.3s ease-in-out",
});

const CardWrapper = styled(Box)({
  "&:hover": {
    [`${Content}`]: {
      marginTop: "30px",
      visibility: "visible",
      opacity: 1,
      transitionDelay: "0.2s",
    },
  },
});

const CardItem = () => {
  return (
    <GlobalStyle>
      <Container>
        <CardWrapper>
          <Card>
            <Image>
              <ImageWrapper src="" alt="" />
            </Image>
            <Content>
              <h3>This is content</h3>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </Content>
          </Card>
        </CardWrapper>
      </Container>
    </GlobalStyle>
  );
};

export default CardItem;
