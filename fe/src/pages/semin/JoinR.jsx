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

const Light = styled.div`
  position: relative;

  top: 190px;
  left: 220px;
`;

const InputQ = styled.div`
  position: relative;

  top: -190px;
  left: 610px;
  margin-top: 25px;
`;

const Name = InputQ;
const Email = InputQ;
const PassWord = InputQ;
const Phone = InputQ;

const Input = styled.input`
  position: relative;
  top: -190px;
  left: 610px;
  margin-top: 10px;

  width: 420px;
  height: 48px;

  border-radius: 13.536px;
  background: #fff;
  box-shadow: 0px 0px 9.360363960266113px 0px rgba(0, 0, 0, 0.25);

  border: none;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;

const NameInput = Input;
const EmailInput = Input;
const PassWordInput = Input;
const PhoneInput = Input;

const Nextbtn = styled.div`
  position: relative;
  top: -190px;
  left: 1120px;

  cursor: pointer;
`;

const JoinR = () => {
  const [nameR, setNameR] = useState("");
  const [emailR, setEmailR] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [phoneR, setPhoneR] = useState("");

  const handleNameR = (event) => {
    setNameR(event.target.value);
  };
  const handleEmailR = (event) => {
    setEmailR(event.target.value);
  };
  const handlePasswordR = (event) => {
    setPasswordR(event.target.value);
  };
  const handlePhoneR = (event) => {
    setPhoneR(event.target.value);
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
      <Light>
        <img
          src={`${process.env.PUBLIC_URL}/images_semin/light.png`}
          alt="light"
          width="260px"
          height="220px"
        />
      </Light>
      <Name>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          1. 당신의{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          이름
        </span>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          은 무엇인가요?
        </span>
      </Name>
      <NameInput></NameInput>
      <Email>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          2. 당신의{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          이메일
        </span>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          을 입력해주세요!
        </span>
      </Email>
      <EmailInput></EmailInput>
      <PassWord>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          3. 당신의{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          비밀번호
        </span>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          도 입력해주세요.
        </span>
      </PassWord>
      <PassWordInput></PassWordInput>
      <Phone>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          4. 당신의{" "}
        </span>
        <span
          style={{
            color: "#FF6D2E",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          이메일
        </span>
        <span
          style={{
            color: "#000000",
            fontSize: "25px",
            fontWeight: "700",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          을 입력해주세요.
        </span>
      </Phone>
      <PhoneInput></PhoneInput>
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

export default JoinR;
