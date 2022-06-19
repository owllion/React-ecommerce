import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cl from "../../constants/color/color";
import { SectionTitle } from "../payment-form/style/PaymentForm.style";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../TabletCartItem";
const CheckoutItemList = () => {
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
export default CheckoutItemList;
