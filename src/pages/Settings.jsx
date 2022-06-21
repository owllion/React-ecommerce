import React from "react";
import styled from "styled-components";

import { IoIosHeart, IoIosCamera } from "react-icons/io";
import { IoPersonSharp, IoLogOutOutline } from "react-icons/io5";

import cl from "../constants/color/color";
import avatar from "../assets/avatar/avatar1.svg";
import { Title } from "./Cart";
import { SingleInputBox } from "../components/shipping-form/ShippingForm";
import { baseInput, baseLabel } from "../components/ReviewForm";
import { PayBtn } from "../components/payment-form/style/PaymentForm.style";

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <SettingTitle>Settings</SettingTitle>
        <DesktopWrapper>
          <SideBar>
            <BarItems>
              <BarItem>
                <ItemIcon>
                  <IoPersonSharp />
                </ItemIcon>
                {/* <ItemText>Account</ItemText> */}
              </BarItem>
              <BarItem>
                <ItemIcon>
                  <IoIosHeart />
                </ItemIcon>
                {/* <ItemText>Favorite</ItemText> */}
              </BarItem>
              <BarItem>
                <ItemIcon>
                  <IoLogOutOutline />
                </ItemIcon>
                {/* <ItemText>Logout</ItemText> */}
              </BarItem>
            </BarItems>
          </SideBar>
          <DesktopMain>
            <DesktopLeft>
              <DropAvatarBox avatar={avatar}>
                <CameraIconBox>
                  <IoIosCamera />
                </CameraIconBox>
              </DropAvatarBox>

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
                <Label>Phone</Label>
                <Input></Input>
              </SingleInputBox>
              <SaveBtn>SAVE</SaveBtn>
            </DesktopRight>
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
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const DesktopMain = styled.div`
  width: 100%;
  display: flex;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 3.5rem;
  border-radius: 8px;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;
// const SideBar = styled.div`
//   /* flex: 5; */
//   margin-right: 1.5rem;
//   /* background: ${cl.white}; */
//   min-height: 50vh;
//   width: 300px;
//   @media (max-width: 1024px) {
//     width: 100%;
//     min-height: 10vh;
//     margin-bottom: 3rem;
//   }

//   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

//   border-radius: 12px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding-top: 4rem;
//   min-height: 50vh;
//   width: 300px;
//   @media (max-width: 1024px) {
//     width: 100%;
//     min-height: 10vh;
//     padding-top: 0;
//   }
// `;
const SideBar = styled.div`
  margin-right: 1.5rem;
  min-height: 50vh;
  width: 100px;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 10vh;
    margin-bottom: 3rem;
  }

  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  min-height: 50vh;
  /* width: 300px; */
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
`;
const BarItem = styled.li`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* border-radius: 12px; */
  transition: background 0.8s ease;
  width: 100%;
  margin-top: 1rem;
  &:hover {
    border-left: 5px solid ${cl.green};
    /* background: #0080801c; */
    @media (max-width: 450px) {
      border-left: none;
    }
  }
`;

const ItemIcon = styled.div`
  display: flex;
  /* margin-right: 0.9rem; */
  transition: 0.8s ease;
  font-size: 1.5rem;
  color: ${cl.darkenGray};
  &:hover {
    color: ${cl.dark};
  }
`;
const ItemText = styled.span`
  font-size: 1.1rem;
  @media (max-width: 450px) {
    display: none;
  }
`;
const DesktopLeft = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 0.8rem;
  }
  /* margin-right: 1.5rem; */
  /* background-color: red; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
`;
const DropAvatarBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 300px;
  height: 300px;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  border-radius: 8px;
  background-image: ${(props) => `url(${props.avatar})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.6s;
  &:hover {
    transform: translateY(-5px);
  }
`;
const CameraIconBox = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 2rem;
`;
const UploadBtn = styled.button``; //下方那一科

const DesktopRight = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 4.5rem;
  }
  padding: 2rem;
`;
const SaveBtn = styled(PayBtn)``;
const Label = styled.label`
  ${baseLabel}
`;
const Input = styled.input`
  ${baseInput}
`;

export default Settings;
