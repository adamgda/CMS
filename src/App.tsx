import React from "react";
import Login from "./Components/Organisms/Login/Login";
import Dashboard from "./Components/Organisms/Dashboard/Dashboard";
import Projects from "./Components/Organisms/Projects/Projects";
import NewProject from "./Components/Organisms/NewProject/NewProject";
import Settings from "./Components/Organisms/Settings/Settings";
import SingleProject from "./Components/Organisms/SingleProject/SingleProject";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoaderContainer } from "./Hocs/Loader/LoaderContainer";
import { ToastrContextProvider } from "./Contexts/ToastrContext";
import { ModalContextProvider } from "./Contexts/ModalContext";
import { AppContainer } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <LoaderContainer>
        <ModalContextProvider>
          <ToastrContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<SingleProject />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </BrowserRouter>
          </ToastrContextProvider>
        </ModalContextProvider>
      </LoaderContainer>
    </AppContainer>
  );
};

export default App;
