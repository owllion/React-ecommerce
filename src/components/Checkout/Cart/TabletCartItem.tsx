import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import PlusMinusBtn from "../../Common/PlusMinusBtn";
import styled, { css } from "styled-components";
import { IProps } from "./DesktopCartItem";
import removeFromCart, {
  IRemoveFromCartAction,
} from "src/store/actions/product/removeFromCart.action";
import { useAppDispatch } from "../../../store/hooks";
import { AnyAction } from "@reduxjs/toolkit";

const TabletCartItem = ({ cartList }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const removeFromCartHandler = async ({
    qty,
    id,
    size,
  }: IRemoveFromCartAction) => {
    try {
      await dispatch(
        removeFromCart({
          id,
          qty,
          size,
        }) as unknown as AnyAction
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TabletSingleItemContainer>
      {cartList.map((item, index) => (
        <>
          <ItemInfo key={index}>
            <ItemInfoBox
              onClick={() => navigate(`/product-detail/${item.product_id}`)}
            >
              <ItemInfoImgBox>
                <ItemImg src={item.product.thumbnail} />
              </ItemInfoImgBox>
              <ItemInfoTextBox>
                <h3>{item.product.product_name}</h3>
              </ItemInfoTextBox>
            </ItemInfoBox>
            <ItemDeleteBox>
              <IoMdTrash
                onClick={() =>
                  removeFromCartHandler({
                    id: item.product_id,
                    qty: item.qty!,
                    size: item.size,
                  })
                }
              />
            </ItemDeleteBox>
          </ItemInfo>
          <ItemInfoTextBox>
            <ItemInfoColor>Black</ItemInfoColor>
            <ItemInfoSize>{item.size}</ItemInfoSize>
          </ItemInfoTextBox>

          <ItemInfoPriceBox>
            <ItemInfoPrice>${item.product.price}</ItemInfoPrice>
            <CounterAndSubtotalBox>
              <ItemInfoCounterBox>
                <PlusMinusBtn
                  cartItemQty={item.qty!}
                  productId={item.product_id}
                  size={item.size}
                />
              </ItemInfoCounterBox>
              <ItemInfoSubTotalBox>
                <ItemInfoSubTotal>
                  ${item.product.price * item.qty!}
                </ItemInfoSubTotal>
              </ItemInfoSubTotalBox>
            </CounterAndSubtotalBox>
          </ItemInfoPriceBox>
        </>
      ))}
    </TabletSingleItemContainer>
  );
};
const TabletSingleItemContainer = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;
export const ItemInfoBox = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemInfoImgBox = styled.div`
  max-width: 7.5rem;
  flex-shrink: 0;
  margin-right: 1.2rem;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
export const ItemInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    @media (min-width: 900px) {
      font-size: 1.2rem;
      margin-right: 1.8rem;
    }
    margin: 0;
    line-height: 1.3;
    font-size: 0.9rem;
  }
`;
const basePTagStyle = css`
  line-height: 1.4;
  color: #515151;
  font-size: 0.9rem;
  margin: 0;
`;
export const ItemInfoColor = styled.p`
  ${basePTagStyle};
`;
export const ItemInfoSize = styled.p`
  ${basePTagStyle}
`;
const ItemDeleteBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  cursor: pointer;
`;

const ItemInfoPriceBox = styled.div`
  width: 15%;
  min-width: 140px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoPrice = styled.p``;

const CounterAndSubtotalBox = styled.div`
  display: flex;
  align-items: center;
  /*justify-content: center; */
  width: 100%;
`;
const ItemInfoSubTotalBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoSubTotal = styled.p`
  @media (max-width: 600px) {
    padding-top: 0.5rem;
  }
`;
const ItemInfoCounterBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem;
  padding-bottom: 0.8rem;
`;
export default TabletCartItem;
