import { useEffect, useState } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";
import { AiFillEdit } from "react-icons/ai";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

import { ReviewArea } from "../Product/Review/ReviewForm";
import cl from "../../constants/color/color";
import SectionTitle from "./SectionTitle";
import { getPopulatedList } from "../../api/user.api";
import { IReview } from "../../interface/review.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import NoResult from "src/components/UserSetting/NoResult";
import Rating from "src/components/Product/Review/Rating";
import { ShopBtn } from "../Home/Hero";
import {
  CountCharactersContainer,
  Count,
} from "src/components/Product/Review/ReviewForm";
import FieldErr from "src/components/error/FieldErr";
import { getValidationData } from "src/components/Checkout/form/shipping-form/getValidationData";

interface IGetReviewList {
  data: {
    reviewList: IReview[];
  };
}
interface FormValue {
  comment: string;
}
const ReviewList = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [isEditable, setIsEditable] = useState(false);
  const [reviewList, setReviewList] = useState<IReview[]>([]);
  const { isLoading } = useAppSelector((state) => state.common);

  const getReviewList = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { reviewList },
      }: IGetReviewList = await getPopulatedList({ type: "review" });
      setReviewList(reviewList);
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  useEffect(() => {
    getReviewList();
  }, []);
  const handleCountCharacters = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setCount(event.target.value.length);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data, e) =>
    console.log(data);
  const cancelEditHandler = () => {
    setIsEditable(false);
    clearErrors("comment");
  };
  const openTextAreaHandler = (comment: string) => {
    setIsEditable(!isEditable);
    setCount(comment.length);
    setValue("comment", comment);
  };
  return (
    <Container>
      <SectionTitle title="ReviewList" />

      {reviewList.map((review) => (
        <SingleReviewContainer key={review.reviewId}>
          <LeftPartContainer>
            {/* <LeftAvatarBox>
                {isLoading ? (
                  <Skeleton
                  circle
                  height="100%"
                  containerClassName="avatar-skeleton"
                  />
                  ) : (
                  <img
                  src={review.user.avatarUpload || review.user.avatarDefault}
                  alt="avatar"
                  />
                  )}
                </LeftAvatarBox> */}
          </LeftPartContainer>
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
            <EditReviewFormContainer onSubmit={handleSubmit(onSubmit)}>
              <ReviewContentContainer>
                {isEditable ? (
                  <>
                    <WiderReviewArea
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
                    <OperationBtnContainer>
                      <OperationBtnWrapper>
                        <Submit>Submit</Submit>
                        <Cancel onClick={() => cancelEditHandler()}>
                          Cancel
                        </Cancel>
                      </OperationBtnWrapper>
                    </OperationBtnContainer>
                  </>
                ) : (
                  <ReviewContent>
                    {isLoading ? <Skeleton count={5} /> : review.comment}
                  </ReviewContent>
                )}
              </ReviewContentContainer>
            </EditReviewFormContainer>
          </RightReviewBody>
        </SingleReviewContainer>
      ))}

      {reviewList.length === 0 && !isLoading && (
        <NoResult imgText={"NOTHING HERE"} showBtn={false} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const SingleReviewContainer = styled.div`
  display: flex;
  padding: 1.8rem 0;
  border-bottom: 1px solid ${cl.gray};
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
  width: 100%;
  @media (min-width: 1200px) {
    padding-right: 1rem;
  }
`;
//內容本體

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
`;
const Cancel = styled(Submit)`
  background: ${cl.white};
  color: ${cl.dark};
`;
export default ReviewList;
