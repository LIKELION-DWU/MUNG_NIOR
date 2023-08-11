import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Container = styled.div`
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 1280px;
  height: 720px;

  border: 0.5px solid #000;
  background: #fff;
  margin: 0px auto;

  overflow-y: auto;
  overflow-x: hidden;
`;

const Logo = styled.div`
  position: fixed;
  width: 50px;
  margin-top: 60px;
  margin-left: 60px;
  z-index: 999;
`;
// background: rgba(255, 255, 255, 0.78);
const MenuContainer = styled.div`
  background: rgba(255, 255, 255, 0.78);
  width: 1020px;
  height: 85px;

  position: fixed;

  top: 3px;

  padding-top: 40px;
  margin-left: 260px;

  line-height: 1;
`;

const Menu = styled.div`
  position: relative;
  display: inline-block;

  margin-left: 90px;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;

  &.question {
    position: relative;
    border-bottom: 4px solid #000;
    padding-bottom: 4px;
  }

  &:hover {
    cursor: pointer;
    color: #ff6d2e;
    border-bottom-color: #ff6d2e;
  }
`;

const Div = styled.div`
  height: 40px;

  margin-top: 160px;

  color: #ff6d2e;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 60px; /* 100% */
`;

const PlateImg = styled.img`
  width: 850px;

  margin-left: 200px;
`;
const TextInput = styled.div`
  width: 330px;
  height: 330px;

  margin-top: -550px;
  margin-left: 460px;

  color: rgba(0, 0, 0, 0.64);
  text-align: center;
  font-family: Tmoney RoundWind;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const SendBtn = styled.img`
  position: fixed;
  width: 300px;

  margin-top: -447px;
  margin-left: 800px;
`;

const Dictaphone = () => {
  const navigate = useNavigate();

  const GoWaiting = () => {
    navigate("/Waiting");
  };

  const Div1 = styled.div`
    height: 565px;

    padding-top: 20px;
    padding-left: 190px;
  `;
  const P = styled.p`
    display: inline-block;
    margin-left: 340px;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
  `;
  const P2 = styled.p`
    display: inline-block;
    margin-left: 20px;
    margin-top: -500px;

    color: #ff6d2e;
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
  `;

  const Transcript = styled.p`
    position: absolute;
    overflow: hidden;

    text-align: center;

    margin-top: -625px;
    margin-left: 250px;

    width: 400px;
    height: 400px;

    color: #000;
    text-align: center;
    font-family: Tmoney RoundWind;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Div1>
      <P>음성인식: </P>
      <P2>{listening ? "시작" : "멈춤"}</P2>
      <div
        // onClick={SpeechRecognition.startListening}
        style={{ marginTop: "-100px" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images_minwoo/plate.png`}
          width="900"
        />
      </div>{" "}
      <Transcript onClick={SpeechRecognition.startListening}>
        {transcript}
      </Transcript>
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      {!listening && (
        <SendBtn
          onClick={GoWaiting}
          src={`${process.env.PUBLIC_URL}/images_minwoo/sendBtn.png`}
        ></SendBtn>
      )}
    </Div1>
  );
};

const Question = () => {
  const navigate = useNavigate();

  const LookAnswer = () => {
    navigate("/LookAnswer");
  };
  const Logout = () => {
    navigate();
  };
  const MyPage = () => {
    navigate("/QuestMy");
  };
  const GoWaiting = () => {
    navigate("/Waiting");
  };

  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images_semin/logo.png`}
          alt="logo"
          width="150px"
        />
      </Logo>
      <MenuContainer>
        <Menu className="question">질문하기</Menu>
        <Menu onClick={LookAnswer}>답변보기</Menu>
        <Menu>로그아웃</Menu>
        <Menu onClick={MyPage}>나의 기록</Menu>
      </MenuContainer>

      <Div>
        <strong>당신의 질문을 담아주세요</strong>
      </Div>

      <Dictaphone />
    </Container>
  );
};

export default Question;
