import { useEffect } from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import SectionTitle from "../SectionTitle";
import { getPopulatedList } from "../../../api/user.api";
import { IReview } from "../../../interface/review.interface";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { commonActions } from "../../../store/slice/Common.slice";
import NoResult from "src/components/UserSetting/NoResult";
import { userActions } from "../../../store/slice/User.slice";
import Review from "./Review";
interface IGetReviewList {
  data: {
    reviewList: IReview[];
  };
}

const ReviewList = () => {
  const dispatch = useAppDispatch();
  const { reviewList } = useAppSelector((state) => state.user || {});
  const { isLoading } = useAppSelector((state) => state.common || {});

  const getReviewList = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { reviewList },
      }: IGetReviewList = await getPopulatedList({ type: "review" });
      dispatch(userActions.setReviewList(reviewList));
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

      {reviewList?.map((review) => (
        <Review review={review} />
      ))}

      {reviewList?.length === 0 && !isLoading && (
        <NoResult imgText={"NOTHING HERE"} showBtn={false} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default ReviewList;
