import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import JoinChoice from "./pages/semin/JoinChoice";
import PreMain from "./pages/semin/PreMain";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Styled />
        <Routes>
          <Route path="/" element={<JoinChoice />} />
          <Route path="/PreMain" element={<PreMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
