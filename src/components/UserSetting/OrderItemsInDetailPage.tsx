import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { useAppSelector } from "../../store/hooks";
import cl from "../../constants/color/color";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../Checkout/Cart/TabletCartItem";
import { IProduct } from "../../interface/product.interface";
import { ICartItem } from "../Checkout/Cart/DesktopCartItem";
import { IOrderItem } from "../../interface/order.interface";
interface IProps {
  needContainer: boolean;
  itemList: IOrderItem[];
  total: number;
  shipping: number;
  discount: number;
  discountTotal: number;
}
const OrderItemsInDetailPage = (props: IProps) => {
  const { needContainer, itemList, total, shipping, discountTotal, discount } =
    props;
  const { isLoading } = useAppSelector((state) => state.common || {});
  return (
    <Container needContainer={needContainer}>
      {isLoading ? (
        [...Array(4)].map((_) => (
          <ItemInfoBox>
            <ItemWrapper>
              <ItemInfoImgBox>
                <Skeleton height="100%" />
                <div style={{ height: "50px", width: "50px" }}></div>
              </ItemInfoImgBox>

              <TextBox>
                <Skeleton width={300} />
                <SizeAndColorBox>
                  <div>
                    <Skeleton width={100} />
                  </div>
                  <Skeleton width={100} />
                </SizeAndColorBox>
              </TextBox>
            </ItemWrapper>
          </ItemInfoBox>
        ))
      ) : (
        <>
          {itemList?.map((item) => (
            <ItemInfoBox>
              <ItemWrapper>
                <ItemInfoImgBox>
                  <Link to={`/product-detail/${item.product_id}`}>
                    <ItemImg src={item.product_info.thumbnail} />
                  </Link>
                </ItemInfoImgBox>

                <TextBox>
                  <h3>{item.product_info.product_name}</h3>
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
                <ItemSubTotal>
                  ${item.qty! * item.product_info.price}
                </ItemSubTotal>
              </ItemWrapper>
            </ItemInfoBox>
          ))}
        </>
      )}

      <SummarySection>
        <SummaryItemBox>
          <SummaryType>Subtotal</SummaryType>
          <SummaryVal>${total}</SummaryVal>
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
          <SummaryVal>
            ${discountTotal ? discountTotal + shipping : total + shipping}
          </SummaryVal>
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
`;
const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ItemInfoImgBox = styled.div`
  /* height: 100px; */
  flex: 1;
  padding: 1rem 1rem 1rem 0;
`;
const ItemNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
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
export default OrderItemsInDetailPage;
