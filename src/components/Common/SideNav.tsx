import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { sideNavMotion } from "../../lib/motion";
import cl from "../../constants/color/color";
import { authActions } from "../../store/slice/Auth.slice";
import { navList } from "../../data/sideNavLinkList";

interface IProps {
  handleShowSideNav: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const SideNav = ({ handleShowSideNav }: IProps) => {
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      dispatch(authActions.clearToken());
      localStorage.clear();
      window.location.href = "/auth/welcome";
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.auth || {});

  const getToken = () => localStorage.getItem("token") || "";

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
          {(!getToken() || !token) && (
            <NavItem>
              <LoginLink
                to={"/auth/welcome"}
                onClick={(e) => handleShowSideNav(e)}
                id="navLink"
              >
                LOG IN
              </LoginLink>
            </NavItem>
          )}
          {navList.map((item, _) => (
            <NavItem key={item.name}>
              <Link
                to={item.route}
                onClick={(e) => handleShowSideNav(e)}
                id="navLink"
              >
                {item.name}
              </Link>
            </NavItem>
          ))}

          {getToken() && (
            <NavItem>
              <LogoutLink
                onClick={(e: React.MouseEvent) => {
                  handleShowSideNav(e);
                  logout();
                }}
                id="navLink"
              >
                LOG OUT
              </LogoutLink>
            </NavItem>
          )}
        </NavBox>
      </Menu>
    </>
  );
};

export const Backdrop = styled.div`
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
const NavBox = styled.ul``;
const NavItem = styled.li`
  padding: 1rem 1rem 1rem 1.5rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  font-weight: 500;
`;
const loginOrOutLink = css`
  font-weight: 800;
  color: ${cl.lightBlue};
`;
const LoginLink = styled(Link)`
  ${loginOrOutLink}
`;
const LogoutLink = styled.span`
  ${loginOrOutLink}
  cursor: pointer;
`;
export default SideNav;
