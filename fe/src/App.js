import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
//semin
import JoinChoice from "./pages/semin/JoinChoice";
import PreMain from "./pages/semin/PreMain";
import JoinQ1 from "./pages/semin/JoinQ1";
import JoinQ2 from "./pages/semin/JoinQ2";
import JoinComplete from "./pages/semin/JoinComplete";
//minwoo_답변자
import Answer from "./pages/minwoo/respond/answer";
import ResMy from "./pages/minwoo/respond/myPage";
import Record from "./pages/minwoo/respond/record";
//minwoo_작성자
import QuestMy from "./pages/minwoo/question/myPage";
import LookAnswer from "./pages/minwoo/question/lookAnswer";
import Question from "./pages/minwoo/question/question";
import Waiting from "./pages/minwoo/question/waiting";
import Example from "./pages/minwoo/example";

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
          {/* 민우경로_답변자 */}
          {/* <Route path="/Answer" element={<Answer />} />
          <Route path="/ResMy" element={<ResMy />} />
          <Route path="/Record" element={<Record />} /> */}
          {/* 민우경로_작성자 */}
          {/* <Route path="/QuestMy" element={<QuestMy />} />
          <Route path="/LookAnswer" element={<LookAnswer />} />
          <Route path="/" element={<Question />} />
          <Route path="/Waiting" element={<Waiting />} />
          <Route path="/Example" element={<Example />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
