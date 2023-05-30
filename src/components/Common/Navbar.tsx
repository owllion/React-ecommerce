import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import cl from "../../constants/color/color";
import { IoMdCart, IoIosMenu } from "react-icons/io";
import SideNav from "./SideNav";
import HeaderSearch from "./HeaderSearch";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ShopBtn } from "../Home/Hero";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const { showSearch } = useAppSelector((state) => state.common || {});
  const { upload_avatar, default_avatar } = useAppSelector(
    (state) => state.user || {}
  );
  const { cartLength } = useAppSelector((state) => state.cart || {});

  const getCartLength = () => {
    const localLen = localStorage.getItem("cartLength");

    if (localLen && (cartLength || cartLength === 0)) return cartLength;

    return 0;
  };

  useEffect(() => {
    getCartLength();
  }, [cartLength]);

  const getToken = () => localStorage.getItem("token") || "";
  const isKeyboardEvent = (
    event: React.KeyboardEvent | React.MouseEvent
  ): event is React.KeyboardEvent => {
    return event && "code" in event;
  };

  const handleShowSideNav = (event: React.MouseEvent | React.KeyboardEvent) => {
    const target = ["backdrop", "close", "closeIcon", "navLink"];
    if (
      isKeyboardEvent(event) ||
      target.includes((event.target as HTMLDivElement | HTMLAnchorElement)?.id)
    ) {
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
              <Link to="/">
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
                <Link to={"/checkout/cart"}>
                  <CartContainer>
                    <CartInnerContainer>
                      <IoMdCart />
                      <Badge>
                        <span>{getCartLength()}</span>
                      </Badge>
                    </CartInnerContainer>
                  </CartContainer>
                </Link>
              </MenuItem>
              <MenuItem noPadding>
                <Link to={getToken() ? "/settings/account" : "/auth/welcome"}>
                  {getToken() ? (
                    <AvatarBox>
                      <Avatar
                        src={upload_avatar || default_avatar}
                        alt={"avatar"}
                        referrerPolicy="no-referrer"
                      />
                    </AvatarBox>
                  ) : (
                    <LoginBtn>Log In</LoginBtn>
                  )}
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
const MenuItem = styled.li<{ noPadding?: boolean }>`
  font-weight: bold;
  padding-right: ${({ noPadding }) => (noPadding ? "0px" : "2rem")};
  @media (max-width: 700px) {
    padding-right: 0;
  }
  cursor: pointer;
  list-style: none;
`;
const SearchIcon = styled.div`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const AvatarBox = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const LoginBtn = styled(ShopBtn)`
  border-radius: 5px;
  background: ${cl.dark};
  cursor: pointer;
  color: ${cl.white};
  padding: 0.7rem 1.5rem;
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
