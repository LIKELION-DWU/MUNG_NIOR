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

// 상단바
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

  &:hover {
    cursor: pointer;
    color: #ff6d2e;
  }
`;

//메인
const MainContainer = styled.div`
  width: 1280px;
  height: 480px;

  margin-top: 70px;
  padding-top: 20px;

  border-radius: 0px 150px 0px 0px;
  background: linear-gradient(
    180deg,
    rgba(186, 186, 186, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const MainUser = () => {
  const UserBox = styled.div`
    background: #00ff22;

    width: 300px;
    height: 300px;

    margin-left: 100px;
    margin-top: 70px;
  `;
  //답변자 이름 받아오는 부분
  const UserName = styled.div`
    color: #404040;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  `;

  return (
    <UserBox>
      <img src="./images_minwoo/user.png" alt="사용자" width="290px" />
      <UserName>유새연</UserName>
      <div
        style={{
          color: "#404040",
          fontFamily: "Noto Sans KR",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          marginLeft: "120px",
        }}
      >
        답변자
      </div>
    </UserBox>
  );
};
const MainTitle = styled.div`
  position: relative;

  width: 500px;

  margin-top: -320px;
  margin-left: 500px;

  color: #404040;
  font-family: Noto Sans KR;
  font-size: 33px;
  font-style: bold;
  font-weight: 900;
  line-height: normal;
`;
const MainListBox = styled.div`
  background: #008870;
  width: 650px;
  height: 260px;

  margin-left: 470px;
  padding: 20px;
  padding-top: 36px;
`;
const List = () => {
  const ListWhite = styled.div`
    width: 590px;
    height: 42px;

    padding: 10px;
    padding-left: 26px;

    border-radius: 35px;
    background: #fff;
  `;
  const ListContent = styled.div`
    color: #404040;
    font-family: Noto Sans KR;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  return (
    <ListWhite>
      <ListContent>앱의 권한 허용을</ListContent>
      <img src="./images_minwoo/next.png" alt="기릿" width="130px" />
    </ListWhite>
  );
};

//버튼
const MoreBtn = styled.button`
  width: 170px;
  height: 60px;

  margin-left: 750px;
  margin-top: -50px;

  border: none;
  border-radius: 20px;
  background: #ff6d2e;

  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const ResMy = () => {
  const navigate = useNavigate();

  const GoMy = () => {
    navigate("/resMy");
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
        <Menu>답변하기</Menu>
        <Menu>로그인</Menu>
        <Menu onClick={GoMy}>나의 기록</Menu>
      </MenuContainer>

      <MainContainer>
        <MainUser />
        <MainTitle>답변을 기록합니다()</MainTitle>
        <MainListBox>
          <List />
        </MainListBox>
      </MainContainer>
      <MoreBtn>답변 더하기</MoreBtn>
    </Container>
  );
};

export default ResMy;
