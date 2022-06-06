import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Koh.</Logo>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <CartContainer>
              <IoMdCart />
              <Badge>
                <span>5</span>
              </Badge>
            </CartContainer>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  position: fixed;
  top: 30px;
  left: 0;
  /* background: ${cl.gray}; */
  width: 100%;
  z-index: 50;
`;
const Wrapper = styled.div`
  padding: 10px 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;
const Right = styled.ul`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.li`
  font-size: 0.9rem;
  font-weight: bold;
  padding-right: 2rem;
  cursor: pointer;
  list-style: none;
`;
const CartContainer = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2rem;
`;
const Badge = styled.div`
  position: absolute;
  top: 0;
  right: -7px;
  span {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${cl.primary};
    color: ${cl.white};
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
  }
`;

export default Navbar;
