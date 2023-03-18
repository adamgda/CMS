import React, { useState } from "react";
import axios from "axios";
import { LoadingScreen } from "../../Components/LoadingScreen/LoadingScreen";
import { LoaderContainerTypes } from "./LoaderContainer.types";

export const LoaderContainer = ({
  children,
}: LoaderContainerTypes): JSX.Element => {
  const [showState, setShowState] = useState<boolean>(false);

  axios.interceptors.request.use(
    (config) => {
      setShowState(true);
      return config;
    },
    (error) => {
      setShowState(false);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      setShowState(false);
      return response;
    },
    (error) => {
      setShowState(false);
      return Promise.reject(error);
    }
  );

  return (
    <>
      <div className={`pageBody ${showState ? "loading" : ""}`}>{children}</div>
      {showState && <LoadingScreen />}
    </>
  );
};
