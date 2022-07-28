import React from "react";

import styled from "styled-components";
import cl from "../constants/color/color";

const ReviewSection = () => {
  return (
    <ReviewSectionContainer>
      <Header>Customer Feedback</Header>
      <MainContent>
        <ScoreOverviewSection>
          <LeftOverview>
            <LeftInner>
              <ScoreStarsBox>
                <Score>5.0</Score>
                <StarsBox>start</StarsBox>
              </ScoreStarsBox>
              <StatisticsText>Based on 18 reviews</StatisticsText>
            </LeftInner>
            <RightRatings>
              {[...Array(5)].map((_, index) => (
                <RatingItems>
                  <RatingStarBox>{5 - index}顆星</RatingStarBox>
                  <RatingBar>------------</RatingBar>
                  <RatingCount>(18)</RatingCount>
                </RatingItems>
              ))}
            </RightRatings>
          </LeftOverview>
          <RightNewReviewBox>Write</RightNewReviewBox>
        </ScoreOverviewSection>
      </MainContent>
    </ReviewSectionContainer>
  );
};

const ReviewSectionContainer = styled.div`
  border: 2px solid red;
  padding: 6rem 0;
  @media (min-width: 767px) {
    padding: 0 4.5rem;
  }
`;
const Header = styled.div`
  border: 2px solid brown;
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 4.5rem;
  margin-bottom: 0.8rem;
  @media (min-width: 750px) {
    margin-bottom: 3rem;
  }
  margin: 2rem;
`;
const MainContent = styled.div`
  border: 2px solid coral;
  max-width: 1200px;
  margin: 1.9rem auto;
  padding: 0;
  background-color: coral;
`;
const ScoreOverviewSection = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftInner = styled.div`
  width: 200px;
  margin-bottom: 1.2rem;
`;
const LeftOverview = styled.div`
  display: flex;
`;
const ScoreStarsBox = styled.div`
  display: flex;
`;
const Score = styled.span``;
const StarsBox = styled.div``;
const StatisticsText = styled.span``;
const RightRatings = styled.div`
  border: 1px solid red;
  /* border-left: 1px solid #eee;
  border-right: 1px solid #eee; */
  width: 300px;
  margin-bottom: 1.2rem;
  padding-left: 1.1rem;
`;
const RatingItems = styled.div`
  display: flex;
`;
const RatingStarBox = styled.div``;
const RatingBar = styled.div``;
const RatingCount = styled.div``;
//前後()用偽元素的樣子

const RightNewReview = styled.div``;
export default ReviewSection;
