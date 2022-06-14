import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";
import ReviewForm from "../components/ReviewForm";
const ReviewSection = () => {
  return (
    <Container>
      <Header>HEAR FROM OUR CUSTOMERS</Header>
      <MainSection>
        <ReviewContainer>
          <SingleReviewContainer>
            <LeftPartContanier>
              <LeftAvatarBox>
                <img
                  src="https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg"
                  alt=""
                />
              </LeftAvatarBox>
            </LeftPartContanier>
            <RightReviewBody>
              <SingleReviewHeader>
                <Author>Miller Mike</Author>
                <Date>2020.06.15</Date>
              </SingleReviewHeader>
              <StarsContainer></StarsContainer>
              <ReviewContentContainer>
                <ReviewContent>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </ReviewContent>
              </ReviewContentContainer>
            </RightReviewBody>
          </SingleReviewContainer>
        </ReviewContainer>
        <ReviewForm />
      </MainSection>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 3rem;
  width: 1140px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  margin: 0 auto;
  max-width: calc(100%- 120px);
  border-top: 1px solid ${cl.lightGray};
`;
const Header = styled.div`
  /* border: 2px solid brown; */
  font-weight: bold;
  font-size: 2rem;
  max-width: calc(100%- 120px);
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 0.8rem;
  @media (min-width: 750px) {
    margin-bottom: 3rem;
  }
  margin: 1rem;
`;
const MainSection = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const ReviewContainer = styled.div`
  flex: 1;
  margin-right: 2.8rem;
  border: 1px solid red;
`; //整個左側
const SingleReviewContainer = styled.div`
  display: flex;
  border: 1px solid orange;
`; //單個box 左側就大頭照 右側content
const LeftPartContanier = styled.div`
  margin-right: 0.8rem;
`;
const LeftAvatarBox = styled.div`
  height: 60px;
  width: 60px;
  img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const RightReviewBody = styled.div`
  padding-right: 8rem;
`;
//內容本體

const SingleReviewHeader = styled.div`
  display: flex;
`;
//這兩個 flex
const Author = styled.h4`
  padding-right: 1.5rem;
  font-weight: 600;
`;
const Date = styled.span`
  color: ${cl.textLightGray};
`;

const StarsContainer = styled.div``;

const ReviewContentContainer = styled.div``;
const ReviewContent = styled.p``;

export default ReviewSection;
