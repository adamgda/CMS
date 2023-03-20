import React from "react";
import { LoaderSvgContainer } from "./Loader.styled";

export const Loader = (): JSX.Element => {
  return (
    <LoaderSvgContainer>
      <div className="hero-container">
        <h2 className="hero glitch layers" data-text={`<AMZ/>`}>
          <span>{`<AMZ/>`}</span>
        </h2>
      </div>
    </LoaderSvgContainer>
  );
};
