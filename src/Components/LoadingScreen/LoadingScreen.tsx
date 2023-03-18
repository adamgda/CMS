import React from "react";
import { LoaderSvgContainer } from "./LoadingScreen.styled";

export const LoadingScreen = () => {
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
