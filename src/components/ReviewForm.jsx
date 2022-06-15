import React, { useState } from "react";

import styled, { css } from "styled-components";
import cl from "../constants/color/color";

import { ShopBtn } from "./Hero";
import Rating from "./Rating";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const handleRating = (res) => setRating(res);

  return (
    <RightWritingReviewContainer>
      <ReviewTitle>Add Your Review</ReviewTitle>
      <ReviewFormContainer>
        <UserRatingContainer>
          <Rating handleRating={handleRating} initialRating={rating} />
          <Score>{rating}</Score>
        </UserRatingContainer>
        <ReviewAreaBox>
          <ReviewAreaLabel>How was your overall experience?</ReviewAreaLabel>
          <ReviewArea rows="5" cols="50"></ReviewArea>
        </ReviewAreaBox>
        <InputContainer>
          <ReviewUserNameBox>
            <ReviewUserNameLabel>Name</ReviewUserNameLabel>
            <ReviewUserName></ReviewUserName>
          </ReviewUserNameBox>

          <ReviewEmailBox>
            <ReviewEmailLabel>Email</ReviewEmailLabel>
            <ReviewEmail></ReviewEmail>
          </ReviewEmailBox>
        </InputContainer>

        <SubmitBtn>Submit</SubmitBtn>
      </ReviewFormContainer>
    </RightWritingReviewContainer>
  );
};

const baseInput = css`
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid ${cl.gray};
  &:focus {
    outline: transparent;
  }
`;

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
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
const Score = styled.span`
  padding: 0 0 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
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
  border-radius: 5px;
  border: 1px solid ${cl.gray};
  min-height: 40%;
  &:focus {
    outline: transparent;
  }
`;
const InputContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
`;
const ReviewUserNameBox = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
    margin-right: 0.7rem;
  }
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const ReviewUserName = styled.input`
  ${baseInput}
`;
const ReviewUserNameLabel = styled.label`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;

const ReviewEmailBox = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const ReviewEmail = styled.input`
  ${baseInput}
`;
const ReviewEmailLabel = styled.label`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;

const SubmitBtn = styled(ShopBtn)`
  margin-top: 2.5rem;
  background: #000;
  color: ${cl.white};
  display: inline-block;
  padding: 0.7rem 2.3rem;
`;
export default ReviewForm;
