import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import cl from "../../constants/color/color";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../Checkout/Cart/TabletCartItem";
import { IProduct } from "../../interface/product.interface";
import { IOrder } from "../../interface/order.interface";

interface IProps {
  needContainer: boolean;
  itemList: IProduct[];
  subTotal: number;
  shipping: number;
  finalTotal: number;
  discount: number;
}
const OrderDetailSummary = (props: IProps) => {
  const { needContainer, itemList, subTotal, shipping, finalTotal, discount } =
    props;
  return (
    <Container needContainer={needContainer}>
      {itemList.length && (
        <>
          {itemList.map((item) => (
            <ItemInfoBox>
              <ItemWrapper>
                <ItemInfoImgBox>
                  <Link to={`/product-detail/${item.productId}`}>
                    <ItemImg src={item.imageList?.[0]} />
                  </Link>
                </ItemInfoImgBox>

                <TextBox>
                  <h3>{item.productName}</h3>
                  <SizeAndColorBox>
                    <div>
                      <ItemInfoColor>Black</ItemInfoColor>
                    </div>
                    <ItemInfoSize>{item.size}</ItemInfoSize>
                  </SizeAndColorBox>
                </TextBox>

                <ItemNumber>
                  <span>x{item.qty}</span>
                </ItemNumber>
                <ItemSubTotal>${item.qty! * item.price}</ItemSubTotal>
              </ItemWrapper>
            </ItemInfoBox>
          ))}
        </>
      )}

      <SummarySection>
        <SummaryItemBox>
          <SummaryType>Subtotal</SummaryType>
          <SummaryVal>${subTotal}</SummaryVal>
        </SummaryItemBox>
        <SummaryItemBox>
          <SummaryType>Shipping</SummaryType>
          <SummaryVal>${shipping}</SummaryVal>
        </SummaryItemBox>
        <SummaryItemBox>
          <SummaryType>Discount</SummaryType>
          <SummaryVal> -${discount}</SummaryVal>
        </SummaryItemBox>
        <SummaryItemBox bigger>
          <SummaryType>Total</SummaryType>
          <SummaryVal>${finalTotal || subTotal! + shipping!}</SummaryVal>
        </SummaryItemBox>
      </SummarySection>
    </Container>
  );
};
const Container = styled.div<{ needContainer: boolean }>`
  ${({ needContainer }) =>
    needContainer &&
    css`
      width: 100%;
      padding: 1.2rem;
    `}
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
  /* span {
    font-weight: bold;
  } */
`;
const ItemSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  font-weight: 900;
`;
const SummarySection = styled.div`
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
`;
const SummaryItemBox = styled.div<{ bigger?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-right: 0.7rem;
  ${({ bigger }) => bigger && "font-size:1.5rem"}
`;
const SummaryType = styled.span``;
const SummaryVal = styled.span`
  font-weight: bold;
`;
export const ApplyBtn = styled.button`
  border-radius: 5px;
  background: ${cl.green};
  color: ${cl.white};
  padding: 0.8rem;
  flex: 1;
  cursor: pointer;
`;
export default OrderDetailSummary;
