import styled from "styled-components";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";

import cl from "src/constants/color/color";
import ReviewForm from "./ReviewForm";
import Rating from "./Rating";
import Lottie from "../../Common/Lottie";
import { useAppSelector } from "../../../store/hooks";

const ReviewSection = () => {
  const { reviews } = useAppSelector((state) => state.product || {});
  const { isLoading } = useAppSelector((state) => state.common || {});
  return (
    <Container>
      <Header>HEAR FROM OUR CUSTOMERS</Header>
      <MainSection>
        <ReviewContainer>
          {!isLoading && !reviews?.length ? (
            <Lottie jsonName="noData" text="Be the first one to comment!" />
          ) : (
            reviews.map((review) => (
              <SingleReviewContainer key={review.id}>
                <LeftPartContainer>
                  <LeftAvatarBox>
                    {isLoading ? (
                      <Skeleton circle height="100%" />
                    ) : (
                      <img
                        src={
                          review.user?.upload_avatar ||
                          review.user?.default_avatar
                        }
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
                      <Author>
                        {review.user?.first_name
                          ? `${review.user.first_name} ${review.user.last_name}`
                          : `${review.user?.fullName}`}
                      </Author>
                      <Date>
                        {dayjs(review.createdAt).format("YYYY MMMM DD")}
                      </Date>
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
        </ReviewContainer>
        <ReviewForm />
      </MainSection>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 3rem;
  width: 1140px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  margin: 0 auto;
  max-width: calc(100%- 120px);
  border-top: 1px solid ${cl.lightGray};
`;
const Header = styled.div`
  font-weight: bold;
  font-size: 2rem;
  max-width: calc(100%- 120px);
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 0.8rem;
  @media (min-width: 750px) {
    margin-bottom: 3rem;
  }
  margin: 1rem;
`;
const MainSection = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const ReviewContainer = styled.div`
  flex: 1.5;

  @media (min-width: 767px) {
    margin-right: 2.8rem;
  }
`; //整個左側
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

export default ReviewSection;
