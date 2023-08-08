import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  position: relative;
  width: 50px;
  margin-top: 60px;
  margin-left: 60px;
  z-index: 999;
`;

const MenuContainer = styled.div`
  position: relative;
  margin-top: -60px;
  margin-left: 300px;

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

  &:hover {
    cursor: pointer;
    color: #ff6d2e;
  }
`;

const Div = styled.div`
  height: 40px;

  margin-top: 70px;

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
  background: #00ff22;
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
        <Menu style={{ textDecorationLine: "underline" }}>질문하기</Menu>
        <Menu onClick={LookAnswer}>답변보기</Menu>
        <Menu>로그아웃</Menu>
        <Menu onClick={MyPage}>나의 기록</Menu>
      </MenuContainer>

      <Div>
        <strong>당신의 질문을 담아주세요</strong>
      </Div>

      <PlateImg
        src={`${process.env.PUBLIC_URL}/images_minwoo/plate.png`}
      ></PlateImg>

      <TextInput>
        접시를 누르면
        <br />
        음성인식을
        <br />
        시작합니다.
      </TextInput>
    </Container>
  );
};

export default Question;
