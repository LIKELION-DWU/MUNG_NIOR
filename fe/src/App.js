import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
//semin
import JoinChoice from "./pages/semin/JoinChoice";
import PreMain from "./pages/semin/PreMain";
//minwoo
import Answer from "./pages/minwoo/respond/answer";
import ResMy from "./pages/minwoo/respond/myPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Styled />
        <Routes>
          {/* 세민 경로 */}
          {/* <Route path="/" element={<JoinChoice />} />
          <Route path="/PreMain" element={<PreMain />} /> */}
          {/* 민우경로 */}
          {/* <Route path="/Answer" element={<Answer />} /> */}
          <Route path="/" element={<Answer />} />
          <Route path="/resMy" element={<ResMy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
