import React from "react";
import { Helmet } from "react-helmet";

const Portfolio: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nataliia Sokolova - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to my web developer portfolio!"
        />
        <meta property="og:title" content="Nataliia Sokolova's Portfolio" />
        <meta
          property="og:description"
          content="Check out Nataliia Sokolova's web developer portfolio."
        />
        <meta property="og:image" content="https://sokolova.ca/-og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
    </>
  );
};

export default Portfolio;
