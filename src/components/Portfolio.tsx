import React from "react";
import { Helmet } from "react-helmet";

interface PortfolioProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Portfolio: React.FC<PortfolioProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imageUrl} alt="Portfolio" />
      </div>
    </>
  );
};

export default Portfolio;
