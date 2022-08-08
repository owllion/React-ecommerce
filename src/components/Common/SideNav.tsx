import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { sideNavMotion } from "../../lib/motion";
import cl from "../../constants/color/color";

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
    route: "/settings/account",
    name: "ACCOUNT",
  },
];

interface IProps {
<<<<<<< HEAD
  handleShowSideNav: (e: React.MouseEvent | React.KeyboardEvent) => void;
=======
  handleShowSideNav: <T extends { id: string }>(
    e: React.MouseEvent<T> | React.KeyboardEvent<T>
  ) => void;
>>>>>>> 2ae9bf63c87856fc7ad02494d335a20548a1e8a1
}
const SideNav = ({ handleShowSideNav }: IProps) => {
  const navigate = useNavigate();

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleShowSideNav(event);
      navigate(`/product-list?keyword=${event.target.value}`);
    }
  };
  return (
    <>
      <Backdrop onClick={(e) => handleShowSideNav(e)} id="backdrop" />

      <Menu {...sideNavMotion}>
        <CloseBtnBox>
          <CloseIcon onClick={(e) => handleShowSideNav(e)} id="close">
            <IoMdClose id="closeIcon" />
          </CloseIcon>
          <Logo>koh.</Logo>
        </CloseBtnBox>
        <NavBox>
          <SearchBarContainer>
            <SearchBarBox>
              <SearchBar type="search" onKeyDown={search} />
              <SearchIcon />
            </SearchBarBox>
          </SearchBarContainer>

          {navList.map((item, index) => (
            <Nav key={index}>
              <Link
                to={item.route}
                onClick={(e) => handleShowSideNav(e)}
                id="navLink"
              >
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
  background: rgba(0, 0, 0, 0.04);
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
const NavBox = styled.ul``;
const Nav = styled.li`
  padding: 1rem 1rem 1rem 1.5rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  letter-spacing: 1.2px;
  font-weight: 500;
`;
export default SideNav;
