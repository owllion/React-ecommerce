import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";

import { baseInput, baseLabel } from "../ReviewForm";
import cl from "../../constants/color/color";
import { SingleInputBox } from "../shipping-form/ShippingForm";
import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import avatar from "../../assets/avatar/avatar1.svg";

const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Container>
      <SectionTitle title="Account" />
      <Wrapper>
        <LeftAvatar>
          <DropAvatarBox avatar={avatar}>
            <CameraIconBox>
              <IoIosCamera />
            </CameraIconBox>
          </DropAvatarBox>
        </LeftAvatar>

        <RightForm onSubmit={handleSubmit(onSubmit)}>
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
        </RightForm>
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
const LeftAvatar = styled.div`
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
const RightForm = styled.form`
  width: 50%;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 0 4.5rem 0;
  }
`;

const Label = styled.label`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const Input = styled.input`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;

export default Account;
