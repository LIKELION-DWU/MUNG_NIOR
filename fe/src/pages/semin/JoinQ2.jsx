import React, { useState } from "react";
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

const Phone = styled.div`
  position: relative;
  top: 150px;
  text-align: center;
`;

const PhoneInput = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  top: 210px;

  width: 700px;
  height: 130px;

  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  border: none;
  color: #000;
  font-family: Pretendard;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;

const Nextbtn = styled.div`
  position: relative;
  top: 308px;
  left: 1120px;
  cursor: pointer;
`;

const JoinQ2 = () => {
  const [phone, setPhone] = useState("");

  const handlePhone = (event) => {
    setPhone(event.target.value);
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
        <Menu>질문</Menu>
        <Menu>답변</Menu>
        <Menu>로그인</Menu>
        <Menu className="join">회원가입</Menu>
      </MenuContainer>
      <Phone>
        <span
          style={{
            color: "#000000",
            fontSize: "50px",
            fontWeight: "990",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          2. 당신의{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "50px",
            fontWeight: "990",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          전화번호는{" "}
        </span>
        <span
          style={{
            color: "#000000",
            fontSize: "50px",
            fontWeight: "990",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          무엇인가요?
        </span>
      </Phone>
      <PhoneInput
        type="text"
        value={phone}
        onChange={handlePhone}
        placeholder="010-0000-0000"
      ></PhoneInput>
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

export default JoinQ2;
