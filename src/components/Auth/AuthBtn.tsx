import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import cl from "../../constants/color/color.js";
import { Btn, BtnText } from "./auth.style";

interface IProps {
  btnText: string;
  needSwitchText?: boolean;
  type?: "button" | "submit";
  id?: "SendEmail" | "ResetPassword";
  //for RestPassword.tsx to decide which function to call
}

const AuthBtn = ({
  btnText,
  needSwitchText,
  type = "submit",
  id = "SendEmail",
}: IProps) => {
  const { isLoading } = useAppSelector((state) => state.common || {});
  return (
    <BtnBox>
      <Btn bgColor={`${cl.dark}`} disabled={isLoading} type={type} id={id}>
        <BtnText color={`${cl.white}`}>
          {needSwitchText ? (isLoading ? "loading" : btnText) : btnText}
        </BtnText>
      </Btn>
    </BtnBox>
  );
};
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default AuthBtn;
