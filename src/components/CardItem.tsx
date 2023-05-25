import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

interface CardItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ContainerFirst = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "30px",
});

const CardBody = styled("div")({
  position: "relative",
  maxWidth: "500px",
  height: "260px",
  backgroundColor: "#fff",
  margin: "20px 10px",
  padding: "30px 20px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
  transition: "0.3s ease-in-out",
  borderRadius: "10px",
  "&:hover": {
    height: "360px",
  },
});

const Image = styled("div")({
  position: "relative",
  borderRadius: "5px",
  width: "260px",
  height: "260px",
  top: "-50%",
  left: "2px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  zIndex: 1,
});

const ImageWrapper = styled("img")({
  maxWidth: "100%",
  borderRadius: "15px",
});

const Content = styled("div")({
  position: "relative",
  top: "-100px",
  padding: "10px 15px",
  color: "black",
  textAlign: "center",
  visibility: "hidden",
  opacity: 0,
  transition: "0.3s ease-in-out",
  marginTop: "0px",
  "&:hover": {
    marginTop: "30px",
    visibility: "visible",
    opacity: 1,
    transitionDelay: "0.2s",
    color: "black",
  },
});

const CardWrapper = styled("div")({
  "&:hover": {
    [`& ${Content}`]: {
      marginTop: "30px",
      visibility: "visible",
      opacity: 1,
      transitionDelay: "0.2s",
    },
  },
});

const CardItem: React.FC<CardItemProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <ContainerFirst>
      <CardWrapper>
        <CardBody>
          <Image>
            <ImageWrapper src={imageSrc} alt={altText} />
          </Image>
          <Content>
            <Typography>{title}</Typography>
            <p>{description}</p>
          </Content>
        </CardBody>
      </CardWrapper>
    </ContainerFirst>
  );
};

export default CardItem;
