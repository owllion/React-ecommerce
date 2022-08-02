import { baseInput, baseLabel } from "src/components/Product/Review/ReviewForm";
import styled, { css } from "styled-components";
import { FieldError } from "react-hook-form";
import cl from "src/constants/color/color";

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
