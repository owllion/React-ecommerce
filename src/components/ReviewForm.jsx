import React from "react";
import styled from "styled-components";
import { ShopBtn } from "./Hero";
const ReviewForm = () => {
  return (
    <RightWritingReviewContainer>
      <ReviewTitle>Add Your Review</ReviewTitle>
      <ReviewFormContainer>
        <UserRatingContainer></UserRatingContainer>
        <ReviewAreaBox>
          <ReviewAreaLabel>Your Email</ReviewAreaLabel>
          <ReviewArea></ReviewArea>
        </ReviewAreaBox>

        <ReviewUserNameBox>
          <ReviewUserName></ReviewUserName>
          <ReviewUserNameLabel></ReviewUserNameLabel>
        </ReviewUserNameBox>

        <ReviewEmailBox>
          <ReviewEmail></ReviewEmail>
          <ReviewEmailLabel></ReviewEmailLabel>
        </ReviewEmailBox>
        <SubmitBtn>Submit</SubmitBtn>
      </ReviewFormContainer>
    </RightWritingReviewContainer>
  );
};

//右邊寫評論區
const RightWritingReviewContainer = styled.div`
  width: calc(40%-24px);
  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 3rem;
    width: 100%;
  }
`;
const ReviewTitle = styled.h3`
  font-weight: 600;
  line-height: 2rem;
`;
const ReviewFormContainer = styled.div``;
const UserRatingContainer = styled.div`
  margin-top: 1rem;
`;
const ReviewAreaBox = styled.div``;
const ReviewAreaLabel = styled.label``;
const ReviewArea = styled.textarea``;

const ReviewUserNameBox = styled.div``;
const ReviewUserName = styled.input``;
const ReviewUserNameLabel = styled.label``;

const ReviewEmailBox = styled.div``;
const ReviewEmail = styled.input``;
const ReviewEmailLabel = styled.label``;

const SubmitBtn = styled(ShopBtn)``;
export default ReviewForm;
