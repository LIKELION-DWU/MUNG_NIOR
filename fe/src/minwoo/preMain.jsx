//잠깐 있는 파일 세민이꺼 받으면 그거 함수로 연결
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  width: 1280px;
  height: 720px;

  border: 0.5px solid #000;
  background: #fff;
  margin: 0px auto;
`;

const Logo = styled.div`
  position: relative;
  margin-top: 60px;
  margin-left: 60px;
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
  font-size: 45px;
  font-style: normal;
  font-weight: 800;

  &.join {
    position: relative;
    border-bottom: 4px solid #000;
    padding-bottom: 4px;
  }
`;

const preMain = () => {
  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images_sm/logo.png`}
          alt="logo"
          width="150px"
        />
      </Logo>
      <MenuContainer>
        <Menu>질문</Menu>
        <Menu>답변</Menu>
        <Menu>로그인</Menu>
        <Menu className="join">회원가입</Menu>
      </MenuContainer>
    </Container>
  );
};

export default preMain;
