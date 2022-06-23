import React from "react";

import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";

import { baseInput, baseLabel } from "../ReviewForm";

import { SingleInputBox } from "../shipping-form/ShippingForm";
import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import avatar from "../../assets/avatar/avatar1.svg";

const Account = () => {
  return (
    <Container>
      <SectionTitle title="Account" />
      <Wrapper>
        <DesktopLeft>
          <DropAvatarBox avatar={avatar}>
            <CameraIconBox>
              <IoIosCamera />
            </CameraIconBox>
          </DropAvatarBox>

          {/* <UploadBtn></UploadBtn> */}
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
          <SaveBtn />
        </DesktopRight>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;
const DesktopLeft = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 0.8rem;
  }
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
// const UploadBtn = styled.button``;
const DesktopRight = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 4.5rem;
  }
  padding: 2rem;
`;

const Label = styled.label`
  ${baseLabel}
`;
const Input = styled.input`
  ${baseInput}
`;

export default Account;
