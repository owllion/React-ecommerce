import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import {
  MainTitle,
  SubTitle,
  TopImgContainer,
  TopImg,
} from "src/components/Auth/auth.style";
import BackBtn from "../Common/button/BackBtn";

const notShowBtnPathList = ["welcome", "verify-email", "reset-password"];
interface IProps extends React.PropsWithChildren {
  mainTitle?: string;
  subTitle?: string;
  imgUrl: string;
  alt: string;
}

const AuthFormTemplate = ({
  mainTitle = "",
  subTitle = "",
  imgUrl,
  alt,
  children,
}: IProps) => {
  const path = useLocation();
  const pathName = path.pathname.split("/")[2];
  const pathIsOnTheList = notShowBtnPathList.includes(pathName);
  return (
    <Container>
      {!pathIsOnTheList && <BackBtn />}
      <TopImgContainer>
        <TopImg src={imgUrl} alt={alt} width="128px" height="128px" />
      </TopImgContainer>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default AuthFormTemplate;
