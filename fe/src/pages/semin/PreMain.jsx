import React, { useState, useEffect } from "react";
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

const Images = styled.div`
  position: relative;

  margin-top: 65px;
  left: 180px;

  width: 200px;
`;

const DotsContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
`;

const Dots = styled.div`
  position: relative;
  display: flex;
  top: -25px;
  left: 200px;
  z-index: 999;

  width: 11px;
  height: 11px;

  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? "white" : "gray")};
`;

const Orangebox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: 80px;
  flex-shrink: 0;

  left: 481px;
  top: -25px;

  border-radius: 150px 0px 0px 10px;
  background: #ff6d2e;

  color: #fff;
  text-align: center;
  font-family: Tmoney RoundWind;
  font-size: 27px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const PreMain = () => {
  const navigate = useNavigate();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
    setCurrentIndex(index);
  };

  const images = [
    `${process.env.PUBLIC_URL}/images_semin/image1.png`,
    `${process.env.PUBLIC_URL}/images_semin/image2.png`,
    `${process.env.PUBLIC_URL}/images_semin/image3.png`,
  ];

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const slideshowInterval = setInterval(changeImage, 3500); // 3.5초마다 이미지 변경

    return () => clearInterval(slideshowInterval);
  }, []);

  useEffect(() => {
    setSelectedImageIndex(currentIndex);
  }, [currentIndex]);

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
      <Images>
        <img
          src={images[currentIndex]}
          alt={`image${currentIndex + 1}`}
          width="1100px"
          height="500px"
        />
      </Images>
      <DotsContainer>
        {images.map((_, index) => (
          <Dots
            key={index}
            onClick={() => handleDotClick(index)}
            active={index === selectedImageIndex}
          />
        ))}
      </DotsContainer>
      <Orangebox>알고 싶은 만큼 질문해주세요. 자세히 알려드립니다.</Orangebox>
    </Container>
  );
};

export default PreMain;
