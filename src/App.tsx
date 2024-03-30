import React from "react";
import { Login } from "@organism/Login";
import { Dashboard } from "@organism/Dashboard";
import { Projects } from "@organism/Projects";
import { NewProject, SingleProject } from "@organism/Project";
import { Settings } from "@organism/Settings";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoaderContainer } from "@hoc/Loader/LoaderContainer";
import { ToastrContextProvider } from "@context/ToastrContext";
import { ModalContextProvider } from "@context/ModalContext";
import { AppContainer } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <LoaderContainer>
        <ModalContextProvider>
          <ToastrContextProvider>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<SingleProject />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </HashRouter>
          </ToastrContextProvider>
        </ModalContextProvider>
      </LoaderContainer>
    </AppContainer>
  );
};

export default App;
