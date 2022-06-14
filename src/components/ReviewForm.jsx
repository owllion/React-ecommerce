import React from "react";
import styled from "styled-components";
import cl from "../constants/color/color";
import { ShopBtn } from "./Hero";
const ReviewForm = () => {
  return (
    <RightWritingReviewContainer>
      <ReviewTitle>Add Your Review</ReviewTitle>
      <ReviewFormContainer>
        <UserRatingContainer>星星*5</UserRatingContainer>
        <ReviewAreaBox>
          <ReviewAreaLabel>How was your overall experience?</ReviewAreaLabel>
          <ReviewArea></ReviewArea>
        </ReviewAreaBox>

        <ReviewUserNameBox>
          <ReviewUserNameLabel>Name</ReviewUserNameLabel>
          <ReviewUserName></ReviewUserName>
        </ReviewUserNameBox>

        <ReviewEmailBox>
          <ReviewEmailLabel>Email</ReviewEmailLabel>
          <ReviewEmail></ReviewEmail>
        </ReviewEmailBox>
        <SubmitBtn>Submit</SubmitBtn>
      </ReviewFormContainer>
    </RightWritingReviewContainer>
  );
};

//右邊寫評論區
const RightWritingReviewContainer = styled.div`
  /* width: calc(40%-24px); */
  flex: 1;
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
  margin: 2rem 0;
`;
const ReviewAreaBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewAreaLabel = styled.label`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;
const ReviewArea = styled.textarea`
  padding: 1rem;
`;

const ReviewUserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const ReviewUserName = styled.input``;
const ReviewUserNameLabel = styled.label`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;

const ReviewEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const ReviewEmail = styled.input``;
const ReviewEmailLabel = styled.label`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;

const SubmitBtn = styled(ShopBtn)`
  margin-top: 1rem;
  background: #000;
  color: ${cl.white};
  display: inline-block;
  padding: 0.7rem 2.3rem;
`;
export default ReviewForm;
