import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import cl from "../constants/color/color";

import { useLottie } from "lottie-react";
import notFound from "../assets/404/notFound.json";

const options = {
  animationData: notFound,
  loop: true,
  autoplay: true,
};

const NotFound = () => {
  const { View } = useLottie(options);
  return (
    <Container>
      <Wrapper>
        <ImgBox>{View}</ImgBox>
        <BackBtnBox>
          <BackBtn>
            <Link to={"/"}>Back To Home</Link>
          </BackBtn>
        </BackBtnBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  @media (max-width: 700px) {
    height: 60vh;
  }
  margin: 10rem 2rem 1rem 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: auto;
  }
`;
export const ImgBox = styled.div`
  width: 100%;
  object-fit: contain;
`;
const BackBtnBox = styled.div`
  padding: 1rem;
`;
const BackBtn = styled.button`
  background: ${cl.dark};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  a {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${cl.white};
  }
`;
export default NotFound;
