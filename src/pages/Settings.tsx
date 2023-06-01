import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

import cl from "../constants/color/color";
import { Title } from "./Cart";
import {
  sideNavLinks,
  sideNavLinksWithoutResetPwd,
} from "../data/settingSideNavLink";
import { confirmAlert } from "react-confirm-alert";
import { useAppDispatch } from "../store/hooks";
import { authActions } from "../store/slice/Auth.slice";

type ILink = {
  icon: any;
  link: string;
};

const Settings = () => {
  const [sureToLogout, setSureToLogout] = useState(false);
  const [selectedPath, setSelectedPath] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [curLinks, setCurLinks] = useState<ILink[]>();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const loginType = localStorage.getItem("loginType");
  const logout = async () => {
    try {
      dispatch(authActions.clearToken());
      localStorage.clear();
      window.location.href = "/auth/welcome";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sureToLogout && logout();
  }, [sureToLogout]);

  useEffect(() => {
    const index = curLinks?.findIndex(
      (item: ILink) => item.link === location.pathname
    );
    setSelectedIndex(index!);
  }, [curLinks]);

  useEffect(() => {
    loginType === "email"
      ? setCurLinks(sideNavLinks!)
      : setCurLinks(sideNavLinksWithoutResetPwd!);

    setSelectedPath(location.pathname);
  }, [location]);

  return (
    <Container>
      <Wrapper>
        <SettingTitle>Settings</SettingTitle>
        <DesktopWrapper>
          <SideBar>
            <BarItems type={loginType!}>
              {curLinks?.map((item, index) => (
                <BarItemLink
                  to={item?.link}
                  key={item?.link}
                  type={loginType!}
                  currentIndex={index}
                >
                  <BarItem
                    currentIndex={index}
                    selectedIndex={selectedIndex}
                    currentPath={location.pathname}
                    selectedPath={selectedPath}
                  >
                    <ItemIcon
                      currentIndex={index}
                      selectedIndex={selectedIndex}
                      currentPath={location.pathname}
                      selectedPath={selectedPath}
                      onClick={() => {
                        setSelectedIndex(index);
                        setSelectedPath(item.link);
                      }}
                    >
                      {item.icon}
                    </ItemIcon>
                  </BarItem>
                </BarItemLink>
              ))}
              <BarItem isLogout={true} onClick={async () => await logout()}>
                <ItemIcon isLogout={true}>
                  <IoLogOutOutline />
                </ItemIcon>
              </BarItem>
            </BarItems>
          </SideBar>
          <DesktopMain>
            <Outlet />
          </DesktopMain>
        </DesktopWrapper>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 8rem 0 8rem 0;
  }
  padding: 5rem 0;
`;
const SettingTitle = styled(Title)`
  @media (max-width: 1024px) {
    border: none;
  }
`;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5rem;
  @media (max-width: 1330px) {
    padding: 0 0.9rem;
  }
`;
const DesktopWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const DesktopMain = styled.div`
  background: #00028008;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 3.5rem;
  border-radius: 8px;
  width: 100%;
  min-height: 600px;
  display: flex;
  @media (max-width: 700px) {
    padding: 1.5rem 1rem;
  }
`;
const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  min-height: 72vh;
  margin-right: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 12px;
  width: 100px;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 10vh;
    padding-top: 0;
    box-shadow: none;
  }
`;
const BarItems = styled.ul<{ type: string }>`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 500px) {
    overflow: scroll;
    overflow-y: hidden;
    padding: 0 0 1.2rem ${({ type }) => (type === "email" ? "9rem" : "13rem")};
  }
`;

const ItemIcon = styled.div<{
  currentPath?: string;
  selectedPath?: string;
  currentIndex?: number;
  selectedIndex?: number;
  isLogout?: boolean;
}>`
  display: flex;
  transition: 0.8s ease;
  font-size: 1.5rem;
  color: ${({
    currentIndex,
    selectedIndex,
    currentPath,
    selectedPath,
    isLogout,
  }) =>
    !isLogout && currentIndex === selectedIndex && currentPath === selectedPath
      ? `${cl.purple}`
      : `${cl.darkenGray}`};
  &:hover {
    color: ${cl.purple};
  }
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    ${({ currentIndex, selectedIndex, currentPath, selectedPath, isLogout }) =>
      css`
        background: ${!isLogout &&
        currentIndex === selectedIndex &&
        currentPath === selectedPath
          ? `${cl.purple}`
          : `${cl.lightGray}`};
        color: ${!isLogout &&
        currentIndex === selectedIndex &&
        currentPath === selectedPath
          ? `${cl.white}`
          : `${cl.purple}`};
      `};
    &:hover {
      color: ${cl.white};
      background: ${cl.purple};
    }
  }
`;

const BarItem = styled.li<{
  currentPath?: string;
  selectedPath?: string;
  currentIndex?: number;
  selectedIndex?: number;
  isLogout?: boolean;
}>`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.8s ease;
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 1025px) {
    ${({ currentIndex, selectedIndex, currentPath, selectedPath, isLogout }) =>
      css`
        border-left: ${!isLogout &&
        currentIndex === selectedIndex &&
        currentPath === selectedPath &&
        `5px solid ${cl.purple}`};
      `};
  }
  &:hover {
    ${ItemIcon} {
      transform: translateY(-5px);

      @media (min-width: 1025px) {
        color: ${cl.purple};
      }
    }
  }
`;
const BarItemLink = styled(Link)<{ currentIndex: number; type: string }>`
  display: ${({ currentIndex, type }) =>
    currentIndex === 1 && type === "google" ? "none" : "flex"};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default Settings;
