import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  width: 1280px;
  height: 720px;

  border: 0.5px solid #000;
  background: #fff;
  margin: 0px auto;

  overflow-y: hidden;
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
  font-size: 45px;
  font-style: normal;
  font-weight: 800;

  &.join {
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

const Choice = styled.div`
  position: relative;
  top: 100px;
  text-align: center;
`;

const QA = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }

  img + img {
    margin-left: 80px;
  }
`;

const Nextbtn = styled.div`
  position: relative;
  top: 155px;
  left: 1120px;
  cursor: pointer;
`;

const JoinChoice = () => {
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
        <Menu>질문</Menu>
        <Menu>답변</Menu>
        <Menu>로그인</Menu>
        <Menu className="join">회원가입</Menu>
      </MenuContainer>
      <Choice>
        <span
          style={{
            color: "#000000",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          해당 서비스를 통해{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          무엇을 하고 싶으신가요?
        </span>
      </Choice>
      <QA>
        <img
          src={`${process.env.PUBLIC_URL}/images_semin/q.png`}
          alt="q"
          width="310px"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images_semin/a.png`}
          alt="a"
          width="310px"
        />
      </QA>
      <Nextbtn>
        <img
          src={`${process.env.PUBLIC_URL}/images_semin/nextbtn.png`}
          alt="nextbtn"
          width="160px"
        />
      </Nextbtn>
    </Container>
  );
};

export default JoinChoice;
