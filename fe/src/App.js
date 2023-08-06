import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
import JoinChoice from "./pages/semin/JoinChoice";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Styled />
        <Routes>
          <Route path="/" element={<JoinChoice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
