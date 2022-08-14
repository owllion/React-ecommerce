import React, { useState } from "react";

import { useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { baseInput, baseLabel } from "../../Product/Review/ReviewForm";
import { getValidationData } from "../../Checkout/form/shipping-form/getValidationData";
import FieldErr from "../../error/FieldErr";
import cl from "../../../constants/color/color";

interface IProps {
  label: string;
  field: string;
  errors: {
    [x: string]: FieldError;
  };
  validation: string[];
}

const PwdInput = ({ label, field, errors, validation }: IProps) => {
  const [showPwd, setShowPwd] = useState(false);
  const { register } = useFormContext();

  return (
    <>
      <PwdBox>
        <Label error={errors[field]}>{label}</Label>
        <Input
          error={errors[field]}
          {...register(field, getValidationData([...validation]))}
          type={showPwd ? "text" : "password"}
        />
        <EyeBox onClick={() => setShowPwd(!showPwd)}>
          {showPwd ? <IoMdEye /> : <IoMdEyeOff />}
        </EyeBox>
      </PwdBox>
      <FieldErr errors={errors} field={field} />
    </>
  );
};
const Label = styled.label<{ error: FieldError }>`
  ${baseLabel}
  color: ${({ error }) => error && `${cl.red}`};
`;
const PwdBox = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  ${baseInput}
  border-color: ${({ error }: { error: FieldError }) =>
    error ? `${cl.red}` : `${cl.gray}`};
`;
const EyeBox = styled.div`
  position: absolute;
  right: 15px;
  top: 45px;
  cursor: pointer;
`;

export default PwdInput;
