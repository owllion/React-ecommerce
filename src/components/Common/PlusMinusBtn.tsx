import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import styled, { css } from "styled-components";

import cl from "../../constants/color/color";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";
import { updateQty } from "src/api/user.api";
import { cartActions } from "../../store/slice/Cart.slice";

interface IProps {
  cartItemQty?: number;
  productId?: string;
  size?: string;
}

const PlusMinusBtn = ({ cartItemQty, size, productId }: IProps) => {
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { itemQty } = useAppSelector((state) => state.common || {});

  const updateQtyHandler = async (
    type: string,
    cartItemQty: number,
    productId: string,
    size: string
  ) => {
    try {
      setLocalLoading(true);
      await updateQty({
        operation_type: type,
        qty: cartItemQty,
        product_id: productId,
        size: size,
      });

      dispatch(cartActions.setCartLength(type === "inc" ? 1 : -1));

      setLocalLoading(false);
    } catch (error) {
      setLocalLoading(false);
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const actionHandler = async (type: string, size: string) => {
    if (cartItemQty) {
      //if now is in cart
      dispatch(
        //update the value in redux
        cartActions.updateCartListItemQty({
          type,
          size,
          id: productId!,
        })
      );
      await updateQtyHandler(type, cartItemQty, productId!, size); //api
      return;
    }
    dispatch(commonActions.setItemQty({ type })); //in detail page, just update qty
  };

  return (
    <Container>
      <Wrapper>
        <Plus
          disabled={localLoading || cartItemQty! === 99 || itemQty === 20}
          onClick={() => actionHandler("inc", size!)}
        >
          +
        </Plus>
        <Input defaultValue={1} value={cartItemQty ? cartItemQty : itemQty} />
        <Minus
          disabled={
            localLoading ||
            cartItemQty! === 1 ||
            (!cartItemQty && itemQty === 1)
          }
          onClick={() => actionHandler("dec", size!)}
        >
          -
        </Minus>
      </Wrapper>
    </Container>
  );
};

const baseBtn = css`
  width: 28px;
  height: 28px;
  font-size: 1.3rem;
  line-height: 25px;
  border-radius: 50%;
  background: #e3e2e27b;
  cursor: pointer;
`;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  border-radius: 12px;
  padding: 10px 8px 10px 5px;
  width: 7rem;
`;
const Plus = styled.button`
  ${baseBtn}
`;
const Minus = styled.button`
  ${baseBtn}
`;
const Input = styled.input`
  text-align: center;
  padding: 0 0.2rem;
  width: 3rem;
  border: none;
  background: ${cl.transparent};
  &:focus {
    outline: transparent;
  }
`;

export default PlusMinusBtn;
