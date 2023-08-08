import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;

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

const LookAnswer = () => {
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
        <Menu>질문하기</Menu>
        <Menu onClick={LookAnswer} style={{ textDecorationLine: "underline" }}>
          답변보기
        </Menu>
        <Menu>로그아웃</Menu>
        <Menu onClick={MyPage}>나의 기록</Menu>
      </MenuContainer>
    </Container>
  );
};

export default LookAnswer;
