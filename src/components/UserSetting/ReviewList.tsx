import { useEffect, useState } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";

import cl from "../../constants/color/color";
import SectionTitle from "./SectionTitle";
import { getPopulatedList } from "../../api/user.api";
import { IReview } from "../../interface/review.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import NoResult from "src/components/UserSetting/NoResult";
import Rating from "src/components/Product/Review/Rating";

interface IGetReviewList {
  data: {
    reviewList: IReview[];
  };
}

const ReviewList = () => {
  const dispatch = useAppDispatch();
  const [reviewList, setReviewList] = useState<IReview[]>();
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
  return (
    <Container>
      <SectionTitle title="ReviewList" />
      {!isLoading && !reviewList?.length ? (
        <NoResult imgText={"NOTHING HERE"} showBtn={false} />
      ) : (
        reviewList?.map((review) => (
          <SingleReviewContainer key={review.reviewId}>
            <LeftPartContainer>
              <LeftAvatarBox>
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
              </LeftAvatarBox>
            </LeftPartContainer>
            <RightReviewBody>
              {isLoading ? (
                <Skeleton width={300} />
              ) : (
                <SingleReviewHeader>
                  <Author>{`${review.user.firstName} ${review.user.lastName}`}</Author>
                  <Date>{dayjs(review.createdAt).format("YYYY MMMM DD")}</Date>
                </SingleReviewHeader>
              )}
              <StarsContainer>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <Rating readonly initialRating={review.rating} />
                )}
              </StarsContainer>
              <ReviewContentContainer>
                <ReviewContent>
                  {isLoading ? <Skeleton count={5} /> : review.comment}
                </ReviewContent>
              </ReviewContentContainer>
            </RightReviewBody>
          </SingleReviewContainer>
        ))
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

const ReviewContentContainer = styled.div`
  margin-top: 0.8rem;
`;
const ReviewContent = styled.p`
  margin: 0;
`;
export default ReviewList;
