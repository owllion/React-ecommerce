import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

import cl from "src/constants/color/color";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ShopBtn } from "../../Home/Hero";
import FieldErr from "src/components/error/FieldErr";
import { getValidationData } from "../../Checkout/form/shipping-form/getValidationData";
import Rating from "./Rating";
import { createReview } from "../../../api/user.api";
import { productActions } from "../../../store/slice/Product.slice";

interface FormValue {
  name: string;
  email: string;
  comment: string;
}
const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const { productId } = useAppSelector((state) => state.product);

  const [rating, setRating] = useState(5);
  const [count, setCount] = useState(0);

  const handleRating = (res: number) => setRating(res);
  const handleCountCharacters = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setCount(event.target.value.length);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      const {
        data: { review },
      } = await createReview({
        comment: data.comment,
        rating,
        product: productId,
      });
      dispatch(productActions.updateProductReviews(review));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  return (
    <RightWritingReviewContainer>
      <ReviewTitle>Add Your Review</ReviewTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <UserRatingContainer>
          <Rating handleRating={handleRating} initialRating={rating} />
          <Score>{rating}</Score>
        </UserRatingContainer>
        <ReviewAreaBox>
          <Label error={errors.comment}>How was your overall experience?</Label>
          <ReviewArea
            error={errors.comment}
            {...register("comment", {
              onChange: (e) => handleCountCharacters(e),
              ...getValidationData(["required"]),
            })}
          />
          <CountCharactersContainer>
            <Count count={count}>{count}/300</Count>
          </CountCharactersContainer>
          <FieldErr errors={errors} field="comment" />
        </ReviewAreaBox>
        <InputContainer>
          <ReviewUserNameBox>
            <Label error={errors.name}>Name</Label>
            <Input
              error={errors.name}
              {...register("name", {
                ...getValidationData(["required", "maxLength"]),
              })}
            />
            <FieldErr errors={errors} field="name" />
          </ReviewUserNameBox>

          <ReviewEmailBox>
            <Label error={errors.email}>Email</Label>
            <Input
              error={errors.email}
              {...register("email", getValidationData(["email", "required"]))}
            />
            <FieldErr errors={errors} field="email" />
          </ReviewEmailBox>
        </InputContainer>

        <SubmitBtn>Submit</SubmitBtn>
      </FormContainer>
    </RightWritingReviewContainer>
  );
};

export const baseInput = css`
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  padding-left: 0.8rem;
  border: 1px solid ${cl.gray};
  &:focus {
    outline: transparent;
  }
`;
export const baseLabel = css`
  color: ${cl.darkenGray};
  font-size: 0.8rem;
`;
export const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  display:block;
  color: ${({ error }) => error && `${cl.red}`};
`;
export const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;

const CountCharactersContainer = styled.div`
  padding-top: 0.7rem;
`;
const Count = styled.span`
  color: ${({ count }: { count: number }) =>
    count >= 270 ? `${cl.red}` : `${cl.dark}`};
`;
const RightWritingReviewContainer = styled.div`
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
const FormContainer = styled.form``;
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
const ReviewArea = styled.textarea.attrs(() => ({
  cols: "5",
  rows: "5",
  maxLength: "300",
}))`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid
    ${(props: { error?: FieldError }) =>
      props.error ? `${cl.red}` : `${cl.gray}`};
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

const ReviewEmailBox = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const SubmitBtn = styled(ShopBtn)`
  margin-top: 2.5rem;
  background: #000;
  color: ${cl.white};
  display: inline-block;
  padding: 0.7rem 2.3rem;
  border-radius: 5px;
  font-weight: 500;
`;
export default ReviewForm;
