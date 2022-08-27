import React from "react";
import styled from "styled-components";

import {
  MainTitle,
  SubTitle,
  TopImgContainer,
  TopImg,
} from "src/components/Auth/auth.style";

interface IProps extends React.PropsWithChildren {
  mainTitle: string;
  subTitle: string;
  imgUrl: string;
}

const AuthFormTemplate = ({
  mainTitle,
  subTitle,
  imgUrl,
  children,
}: IProps) => {
  return (
    <Container>
      <TopImgContainer>
        <TopImg src={imgUrl} />
      </TopImgContainer>
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default AuthFormTemplate;
