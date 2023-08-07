import React from "react";
import styled from "styled-components";

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

// 상단바
const Logo = styled.div`
  position: relative;
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

  &:hover {
    cursor: pointer;
    color: #ff6d2e;
  }
`;

// 내용
const ListContainer = styled.div`
  background: #00ff22;

  margin-top: 30px;
  padding: 20px;
`;

const WhiteBox = styled.div`
  width: 1100px;
  height: 250px;

  margin-left: 50px;
  margin-top: 38px;

  padding-top: 35px;

  border-radius: 30px;
  background: #fff;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.54);
`;
const QuestBox = styled.div`
  height: 70px;

  padding-left: 52px;

  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const AnswerBox = styled.div`
  background: #ff0000;
  position: relative;

  width: 940px;
  height: 70px;

  margin-top: 20px;
  margin-left: 50px;

  padding-left: 50px;
  padding-top: 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;
const InputAnswer = styled.input`
  width: 910px;
  height: 50px;
`;
const NextBtn = styled.button`
  height: 60px;
  width: 90px;

  margin-left: 970px;
  margin-top: -3px;

  background-color: transparent;
  border: none;
`;

const List = () => {
  return (
    <WhiteBox>
      <QuestBox>Q. 키오스크 결제는 어떻게?</QuestBox>
      <AnswerBox>
        <InputAnswer></InputAnswer>
        <img
          src="./images_minwoo/addImg.png"
          style={{
            width: "80px",
            position: "absolute",
            bottom: "6px",
            right: "10px",
          }}
        />
      </AnswerBox>
      <NextBtn>
        <img src="./images_minwoo/next.png" style={{ width: "180px" }} />
      </NextBtn>
    </WhiteBox>
  );
};

const answer = () => {
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
        <Menu>답변하기</Menu>
        <Menu>로그인</Menu>
        <Menu>나의 기록</Menu>
      </MenuContainer>

      <ListContainer>
        <List />
        <List />
      </ListContainer>
    </Container>
  );
};

export default answer;
