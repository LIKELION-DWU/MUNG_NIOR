import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
//semin
import JoinChoice from "./pages/semin/JoinChoice";
import PreMain from "./pages/semin/PreMain";
import JoinQ1 from "./pages/semin/JoinQ1";
import JoinQ2 from "./pages/semin/JoinQ2";
import JoinComplete from "./pages/semin/JoinComplete";
//minwoo
import Answer from "./pages/minwoo/respond/answer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Styled />
        <Routes>
          {/* 세민 경로 */}
          {/* <Route path="/JoinChoice" element={<JoinChoice />} />
          <Route path="/" element={<PreMain />} />
          <Route path="/JoinQ1" element={<JoinQ1 />} />
          <Route path="/JoinQ2" element={<JoinQ2 />} />
          <Route path="/JoinComplete" element={<JoinComplete />} /> */}
          {/* 민우경로 */}
          {/* <Route path="/Answer" element={<Answer />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
