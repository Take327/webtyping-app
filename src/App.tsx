import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useAppSelector } from "./redux/hooks";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main"

const App = () => {
  const globalState = useAppSelector((state) => state.commonState.sideNaviOpen);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Routes />
    </div>
  );
};

export default App;
