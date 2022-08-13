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
}

const PlusMinusBtn = ({ cartItemQty, productId }: IProps) => {
  const dispatch = useAppDispatch();
  const { itemQty } = useAppSelector((state) => state.common);
  const updateQtyHandler = async (cartItemQty: number, productId: string) => {
    try {
      await updateQty({ qty: cartItemQty, productId: productId });
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const actionHandler = async (type: string) => {
    if (cartItemQty) {
      dispatch(
        cartActions.updateCartListItemQty({
          type,
          productId: productId!,
        })
      );
      await updateQtyHandler(cartItemQty, productId!);
      return;
    }
    if (type === "inc" ? itemQty === 10 : itemQty === 1) return;
    dispatch(commonActions.setItemQty({ type }));
  };

  return (
    <Container>
      <Wrapper>
        <Plus onClick={() => actionHandler("inc")}>+</Plus>
        <Input defaultValue={1} value={cartItemQty ? cartItemQty : itemQty} />
        <Minus onClick={() => actionHandler("dec")}>-</Minus>
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
