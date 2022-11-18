import { Fragment } from "react";
import styled, { css } from "styled-components";
import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";

import PlusMinusBtn from "../../Common/PlusMinusBtn";
import { IProduct } from "src/interface/product.interface";
import { useAppDispatch } from "../../../store/hooks";
import removeFromCart, {
  IRemoveFromCartAction,
} from "../../../store/actions/product/removeFromCart.action";

export interface IProps {
  cartList: IProduct[];
}

const DesktopCartItem = ({ cartList }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const removeFromCartHandler = async ({
    qty,
    productId,
    size,
  }: IRemoveFromCartAction) => {
    try {
      await dispatch(
        removeFromCart({
          productId,
          qty,
          size,
        }) as unknown as AnyAction
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DesktopSingleItemContainer>
      {cartList.map((item, index) => (
        <Fragment key={index}>
          <ItemInfoContainer
            onClick={() => navigate(`/product-detail/${item.productId}`)}
          >
            <ItemInfo>
              <ItemInfoImgBox>
                <ItemImg src={item.imageList?.[0]} />
              </ItemInfoImgBox>
              <ItemInfoTextBox>
                <h3>{item.productName}</h3>
                <ItemInfoColor>Black</ItemInfoColor>
                <ItemInfoSize>{item.size}</ItemInfoSize>
              </ItemInfoTextBox>
            </ItemInfo>
          </ItemInfoContainer>

          <ItemInfoPriceBox>
            <ItemInfoPrice>${item.price}</ItemInfoPrice>
          </ItemInfoPriceBox>
          <ItemInfoCounterBox>
            <PlusMinusBtn
              cartItemQty={item.qty!}
              productId={item.productId}
              size={item.size}
            />
          </ItemInfoCounterBox>
          <ItemInfoSubTotalBox>
            <ItemInfoSubTotal>${item.price * item.qty!}</ItemInfoSubTotal>
          </ItemInfoSubTotalBox>
          <ItemDeleteBox>
            <IoMdTrash
              onClick={() =>
                removeFromCartHandler({
                  productId: item.productId,
                  qty: item.qty!,
                  size: item.size,
                })
              }
            />
          </ItemDeleteBox>
        </Fragment>
      ))}
    </DesktopSingleItemContainer>
  );
};
const DesktopSingleItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const ItemInfoContainer = styled.div`
  max-width: 500px;
  min-width: 500px;
  padding-right: 2.7rem;
  margin-bottom: 2rem;
`;
const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ItemInfoImgBox = styled.div`
  max-width: 120px;
  min-width: 120px;
  height: 120px;
  margin-right: 1rem;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
`;
const ItemInfoTextBox = styled.div`
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
    font-size: 1rem;
  }
`;
const basePTagStyle = css`
  line-height: 1.4;
  color: #515151;
  font-size: 0.9rem;
  margin: 0;
`;
const ItemInfoColor = styled.p`
  ${basePTagStyle};
`;
const ItemInfoSize = styled.p`
  ${basePTagStyle}
`;
const ItemInfoPriceBox = styled.div`
  width: 15%;
  min-width: 140px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoPrice = styled.p``;
const ItemInfoSubTotalBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoSubTotal = styled.p``;
const ItemInfoCounterBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem;
  padding-bottom: 0.8rem;
`;
const ItemDeleteBox = styled.div`
  padding-right: 3rem;
  width: 10%;
  min-width: 65px;
  flex-grow: 1;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
`;

export default DesktopCartItem;
