import React from "react";
import styled from "styled-components";

import { MainTitle, SubTitle } from "./Title.style";

const CheckEmail = () => {
  return (
    <CheckEmailFormContainer>
      <MainTitle>What's your email?</MainTitle>
      <SubTitle>We are going to check if you already have account</SubTitle>
    </CheckEmailFormContainer>
  );
};

const CheckEmailFormContainer = styled.form``;
const EmailIconContainer = styled.div``;

export default CheckEmail;
