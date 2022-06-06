import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

import { ImSearch } from "react-icons/im";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <ImSearch />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Koh.</Logo>
        </Center>
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
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 0.9rem;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid ${cl.gray};
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
  padding: 0.5rem;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;
const Right = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.li`
  font-size: 0.9rem;
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
