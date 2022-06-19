import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { sideNavMotion } from "../lib/motion";

import styled from "styled-components";
import cl from "../constants/color/color";

import { IoMdClose, IoIosSearch } from "react-icons/io";

const navList = [
  {
    route: "/",
    name: "HOME",
  },
  {
    route: "/product-list",
    name: "PRODUCTS",
  },
  {
    route: "/account",
    name: "ACCOUNT",
  },
];

const SideNav = ({ handleShowSideNav }) => {
  return (
    <>
      <Backdrop onClick={handleShowSideNav} id="backdrop" />

      <Menu {...sideNavMotion}>
        <CloseBtnBox>
          <CloseIcon onClick={handleShowSideNav} id="close">
            <IoMdClose id="closeIcon" />
          </CloseIcon>
          <Logo>koh.</Logo>
        </CloseBtnBox>
        <NavBox>
          <SearchBarContainer>
            <SearchBarBox>
              <SearchBar type="search" />
              <SearchIcon />
            </SearchBarBox>
          </SearchBarContainer>

          {navList.map((item, index) => (
            <Nav key={index}>
              <Link to={item.route} onClick={handleShowSideNav} id="navLink">
                {item.name}
              </Link>
            </Nav>
          ))}
        </NavBox>
      </Menu>
    </>
  );
};

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Menu = styled(motion.div)`
  width: 320px;
  @media (max-width: 350px) {
    width: 100%;
  }
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  background: ${cl.white};
`;

const CloseBtnBox = styled.div`
  padding: 1rem;
`;
const Logo = styled.h1`
  text-align: center;
`;
const CloseIcon = styled.div`
  cursor: pointer;
  font-size: 1rem;
  background: rgba(225, 225, 225, 0.8);
  border-radius: 50%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
const SearchBarContainer = styled.div`
  padding: 0.7rem 1rem;
`;
const SearchBarBox = styled.div`
  background: #eff4ff;
  height: 50px;
  width: 100%;
  position: relative;
  border-radius: 6px;
`;
const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  caret-color: ${cl.blue};
  color: ${cl.blue};
  padding: 5px 5px 5px 59px;
  background-color: ${cl.transparent};
  &:focus {
    outline: none;
  }
  border: none;
`;
const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 1.9rem;
  color: #6e80a5;
`;
const NavBox = styled.ul`
  /* background-color: coral; */
`;
const Nav = styled.li`
  padding: 1rem 1rem 1rem 1.5rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  letter-spacing: 1.2px;
  font-weight: 500;
`;
export default SideNav;
