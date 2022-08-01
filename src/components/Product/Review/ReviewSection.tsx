import React from "react";
import styled from "styled-components";
import cl from "src/constants/color/color";

import ReviewForm from "./ReviewForm";
import Rating from "./Rating";
import { IReview } from "../../../interface/review.interface";

const ReviewSection = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <Container>
      <Header>HEAR FROM OUR CUSTOMERS</Header>
      <MainSection>
        <ReviewContainer>
          {reviews.map((review, index) => (
            <SingleReviewContainer key={review.reviewId}>
              <LeftPartContainer>
                <LeftAvatarBox>
                  <img
                    src={review.user.avatarUpload || review.user.avatarDefault}
                    alt="avatar"
                  />
                </LeftAvatarBox>
              </LeftPartContainer>
              <RightReviewBody>
                <SingleReviewHeader>
                  <Author>{`${review.user.firstName} ${review.user.lastName}`}</Author>
                  <Date>{review.createdAt}</Date>
                </SingleReviewHeader>
                <StarsContainer>
                  <Rating readonly initialRating={review.rating} />
                </StarsContainer>
                <ReviewContentContainer>
                  <ReviewContent>{review.comment}</ReviewContent>
                </ReviewContentContainer>
              </RightReviewBody>
            </SingleReviewContainer>
          ))}
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
  flex: 1.5;

  @media (min-width: 767px) {
    margin-right: 2.8rem;
  }
  /* border: 1px solid red; */
`; //整個左側
const SingleReviewContainer = styled.div`
  display: flex;
  padding: 1.8rem 0;
  border-bottom: 1px solid ${cl.gray};
  /* border: 1px solid orange; */
`; //單個box 左側就大頭照 右側content
const LeftPartContainer = styled.div`
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
  @media (min-width: 1200px) {
    padding-right: 8rem;
  }
`;
//內容本體

const SingleReviewHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;
`;
//這兩個 flex
const Author = styled.h4`
  padding-right: 1.5rem;
  font-weight: 600;
  margin: 0;
`;
const Date = styled.span`
  color: ${cl.textLightGray};
  font-size: 0.8rem;
`;

const StarsContainer = styled.div``;

const ReviewContentContainer = styled.div``;
const ReviewContent = styled.p`
  margin: 0;
`;

export default ReviewSection;
