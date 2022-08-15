import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import cl from "src/constants/color/color";
import { baseInput } from "../Product/Review/ReviewForm";
import { SectionTitle } from "../Checkout/form/payment-form/PaymentForm.style";
import {
  ItemImg,
  ItemInfoTextBox,
  ItemInfoColor,
  ItemInfoSize,
} from "../Checkout/Cart/TabletCartItem";
import ClearInputBtn from "../Common/button/ClearInputBtn";
import { useCartTotal } from "../../hooks/useCartTotal";
import ApiError from "../error/ApiError";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { applyCoupon } from "../../api/user.api";
import { useAppDispatch } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";

const CheckoutItemList = () => {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState("");
  const [shipping, setShipping] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const { cartList } = useAppSelector((state) => state.cart);
  const { errorMsg } = useAppSelector((state) => state.common);
  const { isLoading } = useAppSelector((state) => state.common);
  const total = useCartTotal(cartList);
  const codeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };
  const clearInputHandler = () => {
    setCode("");
    dispatch(commonActions.setErrorClear());
  };
  interface IApplyCoupon {
    data: {
      finalPrice: number;
      discount: number;
    };
  }
  const applyCouponHandler = async () => {
    try {
      dispatch(commonActions.setLoading(true));
      const {
        data: { finalPrice, discount },
      }: IApplyCoupon = await applyCoupon({ code, totalPrice: total });
      setFinalTotal(finalPrice + shipping);
      setDiscount(discount);
      setCode("");
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
      dispatch(commonActions.setError(err));
    }
  };
  useEffect(() => {
    setShipping(total > 2000 ? 0 : 20);
  }, [total]);
  return (
    <Container>
      <SectionTitle>ORDER SUMMARY</SectionTitle>
      {cartList.length && (
        <>
          {cartList.map((item) => (
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
          <SummaryVal>${finalTotal || total + shipping}</SummaryVal>
        </SummaryItemBox>
      </SummarySection>

      <PromoCodeContainer>
        <CodeInputBox>
          <CodeInput
            value={code}
            placeholder="Your promo code"
            onChange={(e) => codeHandler(e)}
            hasError={errorMsg}
          />
          {code && <ClearInputBtn clearInputHandler={clearInputHandler} />}
        </CodeInputBox>

        <ApplyBtn
          disabled={isLoading || !code}
          onClick={() => applyCouponHandler()}
        >
          APPLY
        </ApplyBtn>
      </PromoCodeContainer>
      <ApiErrorBox>
        <ApiError />
      </ApiErrorBox>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 50%;
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
  @media (min-width: 1000px) {
    flex: 4;
  }
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
`;
const ItemSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
const CodeInput = styled.input<{ hasError: string }>`
  ${baseInput}
  ${({ hasError }) => hasError && "border:1px solid red"}
`;
export const ApplyBtn = styled.button`
  border-radius: 5px;
  background: ${cl.green};
  color: ${cl.white};
  padding: 0.8rem;
  flex: 1;
  cursor: pointer;
`;
export const ApiErrorBox = styled.div`
  padding: 0.5rem 0;
`;
export default CheckoutItemList;
