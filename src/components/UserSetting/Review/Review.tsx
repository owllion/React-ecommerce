import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";
import { AiFillEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import * as SC from "./Review.style";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Rating from "src/components/Product/Review/Rating";
import {
  CountCharactersContainer,
  Count,
} from "src/components/Product/Review/ReviewForm";
import FieldErr from "src/components/error/FieldErr";
import { getValidationData } from "src/components/Checkout/form/shipping-form/getValidationData";
import { userActions } from "src/store/slice/User.slice";
import { modifyReview } from "src/api/user.api";
import { IReview, IUserReview } from "src/interface/review.interface";

interface FormValue {
  comment: string;
  reviewId: string;
}
const Review = ({ review }: { review: IUserReview }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const { isLoading } = useAppSelector((state) => state.common || {});
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
  const modifyReviewHandler = async ({ reviewId: id, comment }: FormValue) => {
    try {
      const params = {
        id,
        comment,
      };
      await modifyReview(params);
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
    <SC.SingleReviewContainer key={review.id}>
      <SC.RightReviewBody>
        {isLoading ? (
          <Skeleton />
        ) : (
          <SC.SingleReviewHeader>
            <SC.HeaderItem>
              <SC.Author>
                {" "}
                {review.user.first_name
                  ? `${review.user.first_name} ${review.user.last_name}`
                  : `${review.user.fullName}`}
              </SC.Author>

              <SC.Date>
                {dayjs(review.createdAt).format("YYYY MMMM DD")}
              </SC.Date>
            </SC.HeaderItem>
            <SC.HeaderItem>
              <SC.EditIcon onClick={() => openTextAreaHandler(review.comment)}>
                <AiFillEdit />
              </SC.EditIcon>
            </SC.HeaderItem>
          </SC.SingleReviewHeader>
        )}
        <SC.StarsContainer>
          {isLoading ? (
            <Skeleton width={100} />
          ) : (
            <Rating readonly initialRating={review.rating} />
          )}
        </SC.StarsContainer>
        <SC.EditReviewFormContainer>
          <SC.ReviewContentContainer>
            {isEditable ? (
              <>
                <SC.WiderReviewArea
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
                <SC.OperationBtnContainer>
                  <SC.OperationBtnWrapper>
                    <SC.Submit
                      type="button"
                      onClick={() =>
                        triggerCommentValidationAndModify(review.id!)
                      }
                    >
                      Submit
                    </SC.Submit>
                    <SC.Cancel onClick={() => cancelEditHandler()}>
                      Cancel
                    </SC.Cancel>
                  </SC.OperationBtnWrapper>
                </SC.OperationBtnContainer>
              </>
            ) : (
              <>
                <SC.ReviewContent>
                  {isLoading ? <Skeleton count={5} /> : review.comment}
                </SC.ReviewContent>
                <SC.ReviewItemInfo>
                  <SC.ReviewItemImgBox>
                    {isLoading ? (
                      <>
                        <Skeleton height="100%" />
                        <div style={{ height: "50px", width: "70px" }}></div>
                      </>
                    ) : (
                      <Link to={`/product-detail/${review.product.id}`}>
                        <SC.ReviewItemImg src={review.product.thumbnail} />
                      </Link>
                    )}
                  </SC.ReviewItemImgBox>
                  <SC.ReviewProductNameBox>
                    <SC.ReviewProductName>
                      {isLoading ? (
                        <Skeleton height={33} />
                      ) : (
                        review.product.product_name
                      )}
                    </SC.ReviewProductName>
                  </SC.ReviewProductNameBox>
                </SC.ReviewItemInfo>
              </>
            )}
          </SC.ReviewContentContainer>
        </SC.EditReviewFormContainer>
      </SC.RightReviewBody>
    </SC.SingleReviewContainer>
  );
};

export default Review;
