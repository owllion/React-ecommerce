import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { toast } from "react-hot-toast";

import cl from "src/constants/color/color";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ShopBtn } from "../../Home/Hero";
import FieldErr from "src/components/error/FieldErr";
import { getValidationData } from "../../Checkout/form/shipping-form/getValidationData";
import Rating from "./Rating";
import { createReview } from "../../../api/user.api";
import { productActions } from "../../../store/slice/Product.slice";
import { AxiosError } from "axios";
import { IReview } from "../../../interface/review.interface";

interface FormValue {
  comment: string;
}
const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const { productId } = useAppSelector((state) => state.product || {});
  const { id } = useAppSelector((state) => state.user);
  const userInfo = useAppSelector((state) => state.user || {});

  const [rating, setRating] = useState(5);
  const [count, setCount] = useState(0);

  const handleRating = (res: number) => setRating(res);
  const handleCountCharacters = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setCount(event.target.value.length);
  const getToken = () => localStorage.getItem("token") || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data, e) => {
    try {
      await createReview({
        comment: data.comment,
        rating,
        product_id: productId,
        user_id: id!,
      });
      const review = {
        user: {
          ...userInfo,
        },
        rating,
        comment: data.comment,
        createdAt: Date.now(),
      } as IReview;

      dispatch(productActions.updateProductReviews(review));
      setRating(5);
      setCount(0);
      reset({
        comment: "",
      });
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string })
        ?.msg;
      toast.error(err);
      setRating(5);
      setCount(0);
      reset({
        comment: "",
      });
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
        <SubmitBtn disabled={!getToken()} haveToken={getToken()}>
          {getToken() ? "Submit" : "Login to leave a comment"}
        </SubmitBtn>
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

export const CountCharactersContainer = styled.div`
  padding-top: 0.7rem;
`;
export const Count = styled.span`
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
export const ReviewArea = styled.textarea.attrs(() => ({
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

export const SubmitBtn = styled(ShopBtn)<{ haveToken: string }>`
  margin-top: 2.5rem;
  background: ${({ haveToken }) => (haveToken ? `${cl.dark}` : `${cl.gray}`)};
  cursor: ${({ haveToken }) => (haveToken ? "pointer" : "not-allowed")};
  color: ${cl.white};
  display: inline-block;
  padding: 0.7rem 2.3rem;
  border-radius: 5px;
  font-weight: 500;
`;
export default ReviewForm;
