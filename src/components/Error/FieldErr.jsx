import React from "react";
import styled from "styled-components";
import cl from "../../constants/color/color";

const FieldErr = ({ errors, field }) => {
  console.log(errors);
  return (
    <ErrMsgContainer>
      {errors?.[field] && <Msg>{errors?.[field].message}</Msg>}
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
