import React, { createContext, useState } from "react";
import { ContextsTypes, LoaderData } from "./Contexts.types";
import { Loader } from "../Components/Loader/Loader";

export const LoaderContext = createContext<LoaderData>({
  show: () => {},
});

export const LoaderContextProvider = ({ children }: ContextsTypes) => {
  const [showState, setShowState] = useState<boolean>(false);

  const updateShowState = (state: boolean) => {
    setShowState(state);
  };

  return (
    <LoaderContext.Provider value={{ show: updateShowState }}>
      <div>
        <div className={`pageBody ${showState ? "loading" : ""}`}>
          {children}
        </div>
        {showState && <Loader />}
      </div>
    </LoaderContext.Provider>
  );
};
