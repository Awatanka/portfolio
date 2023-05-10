import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";

const ContainerHolder = styled("div")({
  width: "50vw",
  marginLeft: "50px",
});

const Container = styled("div")({
  maxWidth: "100px",
  width: "90%",
  padding: "100px 0px",
  position: "relative",
});

const ImageContainer = styled("div")<{ image: string }>((props) => ({
  paddingBottom: "100%",
  background: "#2f4f4f",
  position: "relative",
  overflow: "hidden",
  zIndex: 2,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${props.image})`,
}));

const SectionTitle = styled("h2")<{ isOnDark?: boolean }>((props) => ({
  margin: 0,
  fontSize: "40px",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "-30%",
  transform: "translateY(-50%)",
  zIndex: 1,
  whiteSpace: "nowrap",
  color: props.isOnDark ? "white" : "black",
  "& span": {
    position: "relative",
    display: "block",
  },
}));

const ParallaxTitle = styled("span")({
  position: "relative",
  display: "block",
});

type CardSectionProps = {
  image: string;
  title: string;
};

const CardSection = ({ image, title }: CardSectionProps) => {
  useEffect(() => {
    let didScroll = false;

    const debounce = (func: any, delay: number) => {
      let timeoutId: any;
      return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const handleScroll = debounce(() => {
      didScroll = true;
    }, 10);

    const raf = () => {
      if (didScroll) {
        const parallaxTitles = document.querySelectorAll(".parallax-title");
        parallaxTitles.forEach((element) => {
          (element as HTMLElement).style.transform = `translateX(${
            window.scrollY / 10
          }%)`;
        });
        didScroll = false;
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ContainerHolder>
      <Container>
        <ImageContainer image={image}>
          <SectionTitle isOnDark>
            <ParallaxTitle className="parallax-title">{title}</ParallaxTitle>
          </SectionTitle>
        </ImageContainer>
        <SectionTitle>
          <ParallaxTitle className="parallax-title">{title}</ParallaxTitle>
        </SectionTitle>
      </Container>
    </ContainerHolder>
  );
};

export default CardSection;
