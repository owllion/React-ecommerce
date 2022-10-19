import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import cl from "../../constants/color/color";
import { ShopBtn } from "./Hero";
import { motion } from "framer-motion";
import { homeCategoryItemMotion } from "../../lib/motion";

interface IProps {
  item: { title: string; img: string; category: string };
  index: number;
}

const HomeCategoryItem = ({
  item: { title, img, category },
  index,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <Container as={motion.div} {...homeCategoryItemMotion(index)}>
      <Bg url={img} />
      <Info>
        <Title>{title}</Title>
        <ShopBtn
          onClick={() =>
            navigate("/product-list", {
              state: { category },
            })
          }
        >
          SHOP NOW
        </ShopBtn>
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
const Bg = styled.div<{ url: string }>`
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
