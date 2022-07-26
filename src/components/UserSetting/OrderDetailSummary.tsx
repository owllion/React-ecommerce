import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cl from "../../constants/color/color";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../Checkout/Cart/TabletCartItem";

const OrderDetailSummary = () => {
  return (
    <Container>
      <ItemInfoBox>
        <ItemWrapper>
          <ItemInfoImgBox>
            <Link to="/product-detail/1">
              <ItemImg
                src={
                  "https://i.kfs.io/album/global/86789321,3v1/fit/500x500.jpg"
                }
              />
            </Link>
          </ItemInfoImgBox>
          <TextBox>
            <h3>raven cool Jacket</h3>
            <SizeAndColorBox>
              <div>
                <ItemInfoColor>Black</ItemInfoColor>
              </div>
              <ItemInfoSize>Xl</ItemInfoSize>
            </SizeAndColorBox>
          </TextBox>
          <ItemNumber>
            <span>x5</span>
          </ItemNumber>
          <ItemSubTotal>$800</ItemSubTotal>
        </ItemWrapper>
      </ItemInfoBox>

      <SummarySection>
        <SummaryItemBox>
          <SummaryType>Subtotal</SummaryType>
          <SummaryNum>$800</SummaryNum>
        </SummaryItemBox>
        <SummaryItemBox>
          <SummaryType>Shipping</SummaryType>
          <SummaryNum>$80</SummaryNum>
        </SummaryItemBox>
        <SummaryItemBox>
          <SummaryType>Total</SummaryType>
          <SummaryNum>$880.00</SummaryNum>
        </SummaryItemBox>
      </SummarySection>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 1.2rem;
`;
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${cl.gray};
  padding: 0.5rem 0;
`;
const SizeAndColorBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
  }
  div {
    margin-right: 0.7rem;
  }
`;
const TextBox = styled(ItemInfoTextBox)`
  flex: 8;
  @media (max-width: 500px) {
    flex: 2;
  }
  /* @media (min-width: 1000px) {
    flex: 4;
  } */
`;
const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ItemInfoImgBox = styled.div`
  height: 100px;
  padding: 1rem 1rem 1rem 0;
`;
const ItemNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  span {
    font-weight: bold;
  }
`;
const ItemSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
const SummarySection = styled.div`
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
`;
const SummaryItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const SummaryType = styled.span``;
const SummaryNum = styled.span``;
export const ApplyBtn = styled.button`
  border-radius: 5px;
  background: ${cl.green};
  color: ${cl.white};
  padding: 0.8rem;
  flex: 1;
  cursor: pointer;
`;
export default OrderDetailSummary;
