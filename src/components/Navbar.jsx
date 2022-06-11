import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import cl from "../constants/color/color";

import { IoMdCart, IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <div className="logo">
            <Link to={"/"}>
              <Logo>Koh.</Logo>
            </Link>
          </div>
          <div className="menu">
            <IoIosMenu />
          </div>
        </Left>

        <Center>
          <Logo>Koh.</Logo>
        </Center>
        <Right>
          <RightInner>
            <LinkBox>
              <MenuItem>
                <Link to={"/"}>HOME</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/productList"}>PRODUCTS</Link>
              </MenuItem>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
            </LinkBox>
            <MenuItem>
              <div>
                <MdAccountCircle />
              </div>
            </MenuItem>
            <MenuItem>
              <CartContainer>
                <IoMdCart />
                <Badge>
                  <span>5</span>
                </Badge>
              </CartContainer>
            </MenuItem>
          </RightInner>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  height: 70px;
  @media (max-width: 800px) {
    height: 50px;
  }
  position: fixed;
  top: 0;
  left: 0;
  /* background: ${cl.darkenGray}; */
  width: 100%;
  z-index: 50;
`;
const Wrapper = styled.div`
  padding: 10px 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    height: 50px;
    padding: 10px 20px;
  }
`;
const Left = styled.div`
  .logo {
    @media (max-width: 800px) {
      display: none;
    }
  }
  .menu {
    display: none;
    @media (max-width: 800px) {
      cursor: pointer;
      display: block;
    }
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
const Center = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
const Right = styled.div``;
const RightInner = styled.ul`
  display: flex;
  align-items: center;
`;
const LinkBox = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
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
