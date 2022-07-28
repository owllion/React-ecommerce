import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import cl from "src/constants/color/color";

import { PayBtn } from "../Checkout/form/payment-form/PaymentForm.style";
import { baseInput } from "../Product/Review/ReviewForm";

import { SectionTitle } from "../Checkout/form/payment-form/PaymentForm.style";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../Checkout/Cart/TabletCartItem";
import ClearInputBtn from "../Common/button/ClearInputBtn";

const CheckoutItemList = () => {
  const navigate = useNavigate();
  const toComplete = () => navigate("/checkout/order-complete");

  return (
    <Container>
      <SectionTitle>ORDER SUMMARY</SectionTitle>
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
          <SummaryNum>$108.00</SummaryNum>
        </SummaryItemBox>
      </SummarySection>

      <PromoCodeContainer>
        <CodeInputBox>
          <CodeInput placeholder="Your promo code" />
          <ClearInputBtn />
        </CodeInputBox>
        <ApplyBtn>APPLY</ApplyBtn>
      </PromoCodeContainer>
      <PayBtn type="submit" onClick={() => toComplete()}>
        Pay
      </PayBtn>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 50%;
`;
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  /* background: red; */
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
  @media (min-width: 1000px) {
    flex: 4;
  }

  /* background-color: red; */
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
  /* background: yellow; */
  span {
    font-weight: bold;
  }
`;
const ItemSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  /* background: orange; */
  /* padding-left: 2rem; */
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

const PromoCodeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  padding: 1.2rem 0;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;
const CodeInputBox = styled.div`
  position: relative;
  flex: 4;
  margin-right: 0.8rem;
`;
const CodeInput = styled.input`
  ${baseInput}
`;
export const ApplyBtn = styled.button`
  border-radius: 5px;
  background: ${cl.green};
  color: ${cl.white};
  padding: 0.8rem;
  flex: 1;
  cursor: pointer;
`;

// const ShippingBox = styled.div``;
// const Shipping = styled.span``;
// const ShippingCost = styled.span``;

// const TotalBox = styled.div``;
// const Total = styled.span``;
// const TotalNum = styled.span``;

export default CheckoutItemList;
