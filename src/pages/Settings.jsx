import React from "react";
import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

import cl from "../constants/color/color";
import { Title } from "./Cart";
import { SingleInputBox } from "../components/shipping-form/ShippingForm";
import { baseInput, baseLabel } from "../components/ReviewForm";
const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Settings</Title>
        <DesktopWrapper>
          <SideBar>
            <BarItems>
              <BarItem>
                <ItemIcon>
                  <IoPersonSharp />
                </ItemIcon>
                <ItemText>Account</ItemText>
              </BarItem>
              <BarItem>
                <IoIosHeart />
                Favorite
              </BarItem>
              <BarItem>
                <BiLogOut />
                Logout
              </BarItem>
            </BarItems>
          </SideBar>
          <DesktopLeft>
            <DropAvatarBox>123</DropAvatarBox>
            <UploadBtn></UploadBtn>
          </DesktopLeft>

          <DesktopRight>
            <SingleInputBox>
              <Label>Name</Label>
              <Input></Input>
            </SingleInputBox>
            <SingleInputBox>
              <Label>Email</Label>
              <Input disabled value="Test@gmai.com"></Input>
            </SingleInputBox>
            <SingleInputBox>
              <Label></Label>
              <Input></Input>
            </SingleInputBox>
          </DesktopRight>
        </DesktopWrapper>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 0 5rem 0;
  }
  padding: 5rem 0;
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  /* background-color: coral; */

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
  /* background: yellow; */
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;
const SideBar = styled.div`
  /* flex: 5; */
  margin-right: 1.5rem;
  /* background: ${cl.white}; */
  width: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 12px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
`;
const BarItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BarItem = styled.li`
  text-align: center;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  width: 150px;
  margin-top: 1rem;
  &:hover {
    background-color: red;
  }
`;

const ItemIcon = styled.div`
  display: flex;
  margin-right: 0.9rem;
  font-size: 1.3rem;
`;
const ItemText = styled.span`
  font-size: 1.1rem;
`;
const DesktopLeft = styled.div`
  width: 50%;
  margin-right: 1.5rem;
`;
const DropAvatarBox = styled.div``; //對 就直接div就好 其他再說
const UploadBtn = styled.button``; //下方那一科

const DesktopRight = styled.div`
  width: 50%;
  padding: 2rem;
`;

const Label = styled.label`
  ${baseLabel}
`;
const Input = styled.input`
  ${baseInput}
`;

export default Settings;
