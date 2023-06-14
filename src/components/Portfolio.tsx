import React from "react";
import { Helmet } from "react-helmet";
import img from "../assets/sea.jpg";

class Portfolio extends React.Component {
  render() {
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
          <meta property="og:image" content={img} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
      </>
    );
  }
}

export default Portfolio;
