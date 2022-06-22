import React from "react";
import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { baseInput, baseLabel } from "../ReviewForm";
import cl from "../../constants/color/color";
import SectionTitle from "./SectionTitle";
import PwdSvg from "../../assets/reset-password/pwd.svg";
const ChangePwd = () => {
  return (
    <Container>
      <SectionTitle title="Password" />
      <Wrapper>
        <InputContainer>
          <PwdBox>
            <Label>Current Password</Label>
            <Input />
            <IoMdEye /> <IoMdEyeOff />
          </PwdBox>
          <PwdBox>
            <Label>New Password</Label>
            <Input />
            <IoMdEye /> <IoMdEyeOff />
          </PwdBox>
        </InputContainer>
        <ImageContainer>
          <Img src={PwdSvg} alt="" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
`;
const InputContainer = styled.div`
  flex: 1;
`;
const Label = styled.label`
  ${baseLabel}
`;
const PwdBox = styled.div``;
const Input = styled.input`
  ${baseInput}
`;
const ImageContainer = styled.div`
  /* width: 100%; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default ChangePwd;
