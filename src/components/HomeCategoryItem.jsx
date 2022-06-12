import React from "react";
import styled from "styled-components";
import cl from "../constants/color/color";
import { ShopBtn } from "./Hero";
import { motion } from "framer-motion";

const HomeCategoryItem = ({ item: { title, img }, index }) => {
  return (
    <Container
      as={motion.div}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: index * 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Bg url={img} />
      <Info>
        <Title>{title}</Title>
        <ShopBtn>SHOP NOW</ShopBtn>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  margin: 0.5rem;
  height: 70vh;
  @media (max-width: 450px) {
    height: 20vh;
  }
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.url})`};
  ${Container}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${cl.white};
  margin-bottom: 1.2rem;
`;

export default HomeCategoryItem;
