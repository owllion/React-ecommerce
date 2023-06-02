import { baseInput, baseLabel } from "src/components/Product/Review/ReviewForm";
import styled, { css } from "styled-components";
import { FieldError } from "react-hook-form";
import cl from "src/constants/color/color";
import linepay from "src/assets/order/linepay_png.png";
export const ShippingContainer = styled.div``;
export const FormContainer = styled.form``;
export const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  display:block;
  color: ${({ error }) => error && `${cl.red}`};
`;
export const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;

export const RowFlexBox = styled.div`
  display: flex;
  margin-top: 1.2rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const baseInputBox = css`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    margin-top: 1.2rem;
  }
`;
export const LeftInputBox = styled.div`
  ${baseInputBox}
  margin-right: 2rem;
`;
export const RightInputBox = styled.div`
  ${baseInputBox}
`;
export const SingleInputBox = styled.div`
  width: 100%;
  margin-top: 1.2rem;
`;

export const LinePayBtn = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  display: block;
  margin-top: 2rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  &:not([disabled]):active {
    transform: translate(2px, 2px);
  }
`;
