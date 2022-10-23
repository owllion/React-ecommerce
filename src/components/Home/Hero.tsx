import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { motion } from "framer-motion";

import cl from "../../constants/color/color";
import { heroMotion } from "../../lib/motion";
import { hero } from "../../assets/hero";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Container hero={hero.bgHero} as={motion.div} {...heroMotion}>
      <Left>
        <ImgContainer>
          <Img src={hero.leftHero} alt="left-smaller-hero" />
        </ImgContainer>
      </Left>

      <Right>
        <TextContainer>
          <h1>Trade-in-offer</h1>
          <p>Save more with coupons & up tp 70% off!</p>
        </TextContainer>

        <BtnContainer>
          <ShopBtn onClick={() => navigate("/product-list")}>
            <span>Shop Now</span>
            <FiArrowRight />
          </ShopBtn>
        </BtnContainer>
      </Right>
    </Container>
  );
};
const Container = styled.section<{ hero: string }>`
  width: 100%;
  height: 100vh;
  padding: 0 8rem;
  @media (max-width: 480px) {
    padding: 0 4rem;
  }
  background-image: ${(props) => `url(${props.hero})`};
  background-position: top 25% right 0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Left = styled.div``;
const ImgContainer = styled.div`
  width: 400px;
  height: 600px;
  margin-right: 7.5rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;
const Right = styled.div``;
const TextContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 3.5rem;

    @media (max-width: 1683px) {
      color: ${cl.white};
    }
    @media (max-width: 480px) {
      font-size: 2.8rem;
    }
  }
  p {
    @media (max-width: 1683px) {
      color: ${cl.white};
    }
  }
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;

export const ShopBtn = styled.button`
  border: none;
  background: ${cl.white};
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  span {
    padding-right: 0.5rem;
  }
  &:focus {
    outline: none;
  }
`;
export default Hero;
