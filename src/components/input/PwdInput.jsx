import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { baseInput, baseLabel } from "../ReviewForm";
import { getValidationData } from "../shipping-form/getValidationData";
import cl from "../../constants/color/color";
import FieldErr from "../Error/FieldErr";

const PwdInput = ({ label, field, errors, validation }) => {
  const [showPwd, setShowPwd] = useState(false);
  const { register } = useFormContext();

  return (
    <>
      <PwdBox>
        <Label>{label}</Label>
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
const Label = styled.label`
  ${baseLabel}
`;
const PwdBox = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
const EyeBox = styled.div`
  position: absolute;
  right: 15px;
  top: 45px;
  cursor: pointer;
`;

export default PwdInput;
