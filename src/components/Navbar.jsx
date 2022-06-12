import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import cl from "../constants/color/color";

import { IoMdCart, IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

import SideNav from "./SideNav";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isLoggedIn, setLog] = useState(true);
  const handleShowSideNav = (e) => {
    const target = ["backdrop", "close", "closeIcon"];
    if (target.includes(e.target.id)) {
      setShowSideNav(false);
    }
  };

  return (
    <>
      {showSideNav && <SideNav handleShowSideNav={handleShowSideNav} />}
      <Container>
        <Wrapper>
          <Left>
            <div className="logo">
              <Link to={"/"}>
                <Logo>Koh.</Logo>
              </Link>
            </div>
            <div className="menu" onClick={() => setShowSideNav(!showSideNav)}>
              <IoIosMenu />
            </div>
          </Left>

          <Center>
            <Link to={"/"}>
              <Logo>Koh.</Logo>
            </Link>
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

                {isLoggedIn ? (
                  <MenuItem>
                    <AccountIcon>
                      <MdAccountCircle />
                    </AccountIcon>
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                  </>
                )}
              </LinkBox>
              <MenuItem>
                <CartContainer>
                  <CartInnerContainer>
                    <IoMdCart />
                    <Badge>
                      <span>5</span>
                    </Badge>
                  </CartInnerContainer>
                </CartContainer>
              </MenuItem>
            </RightInner>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.nav`
  height: 70px;
  /* @media (max-width: 800px) {
    height: 50px;
  } */
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
    /* height: 50px; */
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
      font-size: 2rem;
    }
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    flex: 3;
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
  margin: 0;
  padding: 0;
  @media (max-width: 500px) {
    width: 20%;
  }
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
  @media (max-width: 500px) {
    padding-right: 0.2rem;
  }
  cursor: pointer;
  list-style: none;
`;
const AccountIcon = styled.div``;
const CartContainer = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2rem;
`;
const CartInnerContainer = styled.div`
  display: flex;
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
