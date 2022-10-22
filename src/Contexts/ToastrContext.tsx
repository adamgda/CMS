import React, { createContext } from "react";
import { ContextsTypes, ToastrData } from "./Contexts.types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import color from "../Envs/Colors";

export const ToastrContext = createContext<ToastrData>({
  message: null,
});

export const ToastrContextProvider = ({ children }: ContextsTypes) => (
  <ToastrContext.Provider value={{ message: null }}>
    {children}
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={"dark"}
      toastStyle={{ background: color.secondBackground }}
    />
  </ToastrContext.Provider>
);
