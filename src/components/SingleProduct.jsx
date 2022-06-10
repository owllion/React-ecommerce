import React from "react";
import styled from "styled-components";
import cl from "../constants/color/color";

import { IoMdCart } from "react-icons/io";
import { FiHeart, FiSearch } from "react-icons/fi";

const SingleProduct = ({ item: { img } }) => {
  return (
    <Container>
      <Image src={img} alt="product" />
      <Info>
        <Icon>
          <IoMdCart />
        </Icon>
        <Icon>
          <FiSearch />
        </Icon>
        <Icon>
          <FiHeart />
        </Icon>
      </Info>
    </Container>
  );
};
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 0.2rem;
  padding: 1.2rem;
  min-width: 260px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 15px;
  background-color: #ece5d833;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default SingleProduct;
