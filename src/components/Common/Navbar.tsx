import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import cl from "../../constants/color/color";
import { IoMdCart, IoIosMenu, IoIosSearch, IoIosLogIn } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import SideNav from "./SideNav";
import HeaderSearch from "./HeaderSearch";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";

const Navbar = () => {
  const { showSearch } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const { cartLength } = useAppSelector((state) => state.cart);
  const [showSideNav, setShowSideNav] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const handleShowSideNav = <T extends { id: string }>(
    e: React.MouseEvent<T>
  ) => {
    const target = ["backdrop", "close", "closeIcon", "navLink"];
    if (target.includes((e.target as unknown as T).id)) {
      setShowSideNav(false);
    }
  };

  const changeNavColor = () =>
    window.scrollY >= 10 ? setColorChange(true) : setColorChange(false);
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  });
  return (
    <>
      <AnimatePresence>
        {showSideNav && <SideNav handleShowSideNav={handleShowSideNav} />}
        {showSearch && <HeaderSearch />}
      </AnimatePresence>

      <Container>
        <Wrapper change={colorChange}>
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
                  <Link to={"/product-list"}>PRODUCTS</Link>
                </MenuItem>
              </LinkBox>
              <MenuItem>
                <SearchIcon
                  onClick={() => dispatch(commonActions.setShowSearch(true))}
                >
                  <IoIosSearch />
                </SearchIcon>
              </MenuItem>
              <MenuItem>
                <Link to={"/settings/account"}>
                  <AccountIcon>
                    <MdAccountCircle />
                  </AccountIcon>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to={"/checkout/cart"}>
                  <CartContainer>
                    <CartInnerContainer>
                      <IoMdCart />
                      <Badge>
                        <span>{cartLength}</span>
                      </Badge>
                    </CartInnerContainer>
                  </CartContainer>
                </Link>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
`;
const Wrapper = styled.div<{ change: boolean }>`
  background: ${({ change }) => (change ? "white" : "transparent")};
  transition: 0.8s all ease;
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
  @media (max-width: 700px) {
    padding-right: 0;
  }
  cursor: pointer;
  list-style: none;
`;
const SearchIcon = styled.div`
  font-size: 1.5rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
const AccountIcon = styled.div`
  font-size: 1.5rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
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
