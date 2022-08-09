import { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import cl from "../constants/color/color";
import { Title } from "./Cart";
import { sideNavLinks } from "../data/settingSideNavLink";
import { confirmAlert } from "react-confirm-alert";
import { logoutApi } from "../api/auth.api";
import { useAppDispatch } from "../store/hooks";
import { commonActions } from "../store/slice/Common.slice";
import { authActions } from "../store/slice/Auth.slice";

const Settings = () => {
  const [sureToLogout, setSureToLogout] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      /**
       * logoutApi may fail(cause of refreshToken's expiration)
       * so we need to clear the store token first.
       * (in axios's interceptor, do not know why it cannot dispatch  clear token action as expected.)
       */
      dispatch(authActions.clearToken());
      await logoutApi();
      localStorage.clear();
      navigate("/auth/welcome");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sureToLogout && logout();
  }, [sureToLogout]);

  const checkForLogout = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Sure",
          onClick: () => setSureToLogout(true),
        },
        {
          label: "No",
          onClick: () => setSureToLogout(false),
        },
      ],
    });
  };

  return (
    <Container>
      <Wrapper>
        <SettingTitle>Settings</SettingTitle>
        <DesktopWrapper>
          <SideBar>
            <BarItems>
              {sideNavLinks.map((item, _) => (
                <BarItemLink to={item.link} key={item.link}>
                  <BarItem>
                    <ItemIcon>{item.icon}</ItemIcon>
                  </BarItem>
                </BarItemLink>
              ))}
              <BarItem onClick={() => checkForLogout()}>
                <ItemIcon>
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
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
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
  display: flex;
  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;
const SideBar = styled.div`
  margin-right: 1.5rem;
  min-height: 50vh;
  width: 100px;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 10vh;
    margin-bottom: 3rem;
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media (max-width: 1024px) {
    box-shadow: none;
  }
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  min-height: 50vh;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 10vh;
    padding-top: 0;
  }
`;
const BarItems = styled.ul`
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
  }
  @media (max-width: 380px) {
    padding: 0 0 1.2rem 5rem;
  }
`;
const BarItem = styled.li`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.8s ease;
  width: 100%;
  margin-top: 1rem;
  &:hover {
    border-left: 5px solid ${cl.purple};
    @media (max-width: 1024px) {
      border-left: none;
    }
  }
`;
const BarItemLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const ItemIcon = styled.div`
  display: flex;
  transition: 0.8s ease;
  font-size: 1.5rem;
  color: ${cl.darkenGray};
  &:hover {
    color: ${cl.purple};
    @media (max-width: 1024px) {
      color: ${cl.white};
      background: ${cl.purple};
    }
  }
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    color: ${cl.purple};
    width: 50px;
    height: 50px;
    background-color: ${cl.lightGray};
    border-radius: 50%;
  }
`;

export default Settings;
