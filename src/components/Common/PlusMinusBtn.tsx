import styled, { css } from "styled-components";
import cl from "../../constants/color/color";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { commonActions } from "../../store/slice/Common.slice";

const PlusMinusBtn = () => {
  const dispatch = useAppDispatch();
  const { itemQty } = useAppSelector((state) => state.common);

  const increaseHandler = () => {
    if (itemQty === 10) return;
    dispatch(commonActions.setItemQty({ type: "inc" }));
  };

  const minusHandler = () => {
    if (itemQty === 1) return;
    dispatch(commonActions.setItemQty({ type: "minus" }));
  };

  return (
    <Container>
      <Wrapper>
        <Plus onClick={() => increaseHandler()}>+</Plus>
        <Input defaultValue={1} value={itemQty} />
        <Minus onClick={() => minusHandler()}>-</Minus>
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
