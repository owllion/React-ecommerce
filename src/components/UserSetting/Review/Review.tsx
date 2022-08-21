import { useState } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";
import { AiFillEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ReviewArea } from "../../Product/Review/ReviewForm";
import cl from "../../../constants/color/color";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Rating from "src/components/Product/Review/Rating";
import { ShopBtn } from "../../Home/Hero";
import {
  CountCharactersContainer,
  Count,
} from "src/components/Product/Review/ReviewForm";
import FieldErr from "src/components/error/FieldErr";
import { getValidationData } from "src/components/Checkout/form/shipping-form/getValidationData";
import { ItemImg } from "src/components/Checkout/Cart/TabletCartItem";
import { userActions } from "../../../store/slice/User.slice";
import { modifyReview } from "src/api/user.api";
import { IReview } from "src/interface/review.interface";

interface FormValue {
  comment: string;
  reviewId: string;
}
const Review = ({ review }: { review: IReview }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const { isLoading } = useAppSelector((state) => state.common);
  const {
    register,
    clearErrors,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });

  const openTextAreaHandler = (comment: string) => {
    setIsEditable(!isEditable);
    setCount(comment.length);
    setValue("comment", comment);
  };

  const countCharactersHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setCount(event.target.value.length);

  const cancelEditHandler = () => {
    setIsEditable(false);
    clearErrors("comment");
  };
  const modifyReviewHandler = async ({ reviewId, comment }: FormValue) => {
    try {
      const params = {
        reviewId,
        comment,
      };
      await modifyReview({
        reviewItem: params,
      });
      dispatch(userActions.updateReview(params));
      setIsEditable(false);
      toast.success("modify successfully");
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };

  const triggerCommentValidationAndModify = async (reviewId: string) => {
    await trigger("comment");
    if (!errors.comment) modifyReviewHandler({ reviewId, comment });
  };

  return (
    <SingleReviewContainer key={review.reviewId}>
      <RightReviewBody>
        {isLoading ? (
          <Skeleton width={300} />
        ) : (
          <SingleReviewHeader>
            <HeaderItem>
              <Author>{`${review.user.firstName} ${review.user.lastName}`}</Author>

              <Date>{dayjs(review.createdAt).format("YYYY MMMM DD")}</Date>
            </HeaderItem>
            <HeaderItem>
              <EditIcon onClick={() => openTextAreaHandler(review.comment)}>
                <AiFillEdit />
              </EditIcon>
            </HeaderItem>
          </SingleReviewHeader>
        )}
        <StarsContainer>
          {isLoading ? (
            <Skeleton width={100} />
          ) : (
            <Rating readonly initialRating={review.rating} />
          )}
        </StarsContainer>
        <EditReviewFormContainer>
          <ReviewContentContainer>
            {isEditable ? (
              <>
                <WiderReviewArea
                  error={errors.comment}
                  {...register("comment", {
                    onChange: (e) => {
                      setComment(e.target.value);
                      countCharactersHandler(e);
                    },
                    ...getValidationData(["required"]),
                  })}
                />
                <CountCharactersContainer>
                  <Count count={count}>{count}/300</Count>
                </CountCharactersContainer>
                <FieldErr errors={errors} field="comment" />
                <OperationBtnContainer>
                  <OperationBtnWrapper>
                    <Submit
                      type="button"
                      onClick={() =>
                        triggerCommentValidationAndModify(review.reviewId!)
                      }
                    >
                      Submit
                    </Submit>
                    <Cancel onClick={() => cancelEditHandler()}>Cancel</Cancel>
                  </OperationBtnWrapper>
                </OperationBtnContainer>
              </>
            ) : (
              <>
                <ReviewContent>
                  {isLoading ? <Skeleton count={5} /> : review.comment}
                </ReviewContent>
                <ReviewItemInfo>
                  <ReviewItemImgBox>
                    {isLoading ? (
                      <>
                        <Skeleton height="100%" />
                        <div style={{ height: "50px", width: "70px" }}></div>
                      </>
                    ) : (
                      <Link to={`/product-detail/${review.product.productId}`}>
                        <ReviewItemImg src={review.product.imageList?.[0]} />
                      </Link>
                    )}
                  </ReviewItemImgBox>
                  <ReviewProductNameBox>
                    <ReviewProductName>
                      {isLoading ? (
                        <Skeleton height={33} />
                      ) : (
                        review.product.productName
                      )}
                    </ReviewProductName>
                  </ReviewProductNameBox>
                </ReviewItemInfo>
              </>
            )}
          </ReviewContentContainer>
        </EditReviewFormContainer>
      </RightReviewBody>
    </SingleReviewContainer>
  );
};

const SingleReviewContainer = styled.div`
  display: flex;
  padding: 1.8rem 0;
  border-bottom: 1px solid ${cl.gray};
`;
const RightReviewBody = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    padding-right: 1rem;
  }
`;
const SingleReviewHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
`;
const HeaderItem = styled.div`
  display: flex;
`;
const Author = styled.h4`
  padding-right: 1.5rem;
  font-weight: 600;
  margin: 0;
`;
const Date = styled.span`
  color: ${cl.textLightGray};
  font-size: 0.8rem;
`;

const EditIcon = styled.div`
  cursor: pointer;
`;
const StarsContainer = styled.div``;
const EditReviewFormContainer = styled.form``;
const ReviewContentContainer = styled.div`
  margin-top: 0.8rem;
`;
const ReviewContent = styled.p`
  margin: 0;
`;
const WiderReviewArea = styled(ReviewArea)`
  width: 100%;
`;
const OperationBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const OperationBtnWrapper = styled.div`
  display: flex;
`;
const Submit = styled(ShopBtn)`
  background: ${cl.dark};
  color: ${cl.white};
  padding: 0.7rem 2.3rem;
  border-radius: 5px;
  font-weight: 500;
`;
const Cancel = styled(Submit)`
  background: ${cl.white};
  color: ${cl.dark};
  @media (min-width: 350px) {
    margin-left: 1rem;
  }
`;
const ReviewItemInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;
const ReviewItemImgBox = styled.div`
  width: 75px;
  padding: 1rem 1rem 1rem 0;
`;
const ReviewItemImg = styled(ItemImg)``;
const ReviewProductNameBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ReviewProductName = styled.p`
  font-weight: 500;
  margin: 0;
  width: 100%;
`;
export default Review;
