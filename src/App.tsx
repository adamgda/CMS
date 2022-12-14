import React from "react";
import Login from "./Layouts/Login/Login";
import Dashboard from "./Layouts/Dashboard/Dashboard";
import Projects from "./Layouts/Projects/Projects";
import NewProject from "./Layouts/NewProject/NewProject";
import Settings from "./Layouts/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoaderContextProvider } from "./Contexts/LoaderContext";
import { ToastrContextProvider } from "./Contexts/ToastrContext";
import { ModalContextProvider } from "./Contexts/ModalContext";
import { AppContainer } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <LoaderContextProvider>
        <ModalContextProvider>
          <ToastrContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </BrowserRouter>
          </ToastrContextProvider>
        </ModalContextProvider>
      </LoaderContextProvider>
    </AppContainer>
  );
};

export default App;
