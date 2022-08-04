import React from "react";
import styled from "styled-components";
import cl from "../../constants/color/color";
import { FieldError } from "react-hook-form";
interface IProps {
  errors: {
    [x: string]: FieldError;
  };
  field: string;
}

const FieldErr = ({ errors, field }: IProps) => {
  return (
    <ErrMsgContainer>
      {errors?.[field] && <Msg>{errors[field].message}</Msg>}
    </ErrMsgContainer>
  );
};

const ErrMsgContainer = styled.div`
  margin-top: 0.2rem;
`;
const Msg = styled.p`
  margin: 0;
  color: ${cl.red};
`;
export default FieldErr;
