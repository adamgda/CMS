import React, { createContext } from "react";
import { ContextData, ContextsTypes } from "./Contexts.types";

export const ModalContext = createContext<ContextData>({
  state: false,
  id: null,
});

export const ModalContextProvider = ({ children }: ContextsTypes) => (
  <ModalContext.Provider value={{ state: false, id: null }}>
    {children}
  </ModalContext.Provider>
);
