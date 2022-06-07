import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";
import hero from "../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <Container hero={hero}>
      <h1>Trade-in-offer</h1>
      <p>Save more with coupons & up tp 70% off!</p>
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 5rem;
  background-image: ${(props) => `url(${props.hero})`};
  background-position: top 25% right 0;
  background-size: cover;
`;

// const ImgContainer = styled.div``;
// const Img = styled.img``;
// const HeroTextContainer = styled.div``;
export default Hero;
