import styled from "styled-components";
import cl from "../../../constants/color/color";
import { ShopBtn } from "../../Home/Hero";
import { ReviewArea } from "../../Product/Review/ReviewForm";
import { ItemImg } from "src/components/Checkout/Cart/TabletCartItem";

export const SingleReviewContainer = styled.div`
  display: flex;
  padding: 1.8rem 0;
  border-bottom: 1px solid ${cl.gray};
`;
export const RightReviewBody = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    padding-right: 1rem;
  }
`;
export const SingleReviewHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 350px) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;
export const Author = styled.h4`
  padding-right: 1.5rem;
  font-weight: 600;
  margin: 0;
`;
export const Date = styled.span`
  color: ${cl.textLightGray};
  font-size: 0.8rem;
`;

export const EditIcon = styled.div`
  cursor: pointer;
`;
export const StarsContainer = styled.div``;
export const EditReviewFormContainer = styled.form``;
export const ReviewContentContainer = styled.div`
  margin-top: 0.8rem;
`;
export const ReviewContent = styled.p`
  margin: 0;
`;
export const WiderReviewArea = styled(ReviewArea)`
  width: 100%;
`;
export const OperationBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const OperationBtnWrapper = styled.div`
  display: flex;
`;
export const Submit = styled(ShopBtn)`
  background: ${cl.dark};
  color: ${cl.white};
  padding: 0.7rem 2.3rem;
  border-radius: 5px;
  font-weight: 500;
`;
export const Cancel = styled(Submit)`
  background: ${cl.white};
  color: ${cl.dark};
  @media (min-width: 350px) {
    margin-left: 1rem;
  }
`;
export const ReviewItemInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;
export const ReviewItemImgBox = styled.div`
  width: 75px;
  padding: 1rem 1rem 1rem 0;
`;
export const ReviewItemImg = styled(ItemImg)``;
export const ReviewProductNameBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ReviewProductName = styled.p`
  font-weight: 500;
  margin: 0;
  width: 100%;
`;
