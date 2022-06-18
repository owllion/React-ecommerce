import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../payment-form/style/PaymentForm.style";
import { baseInput, baseLabel } from "../ReviewForm";
const ShippingForm = () => {
  return (
    <ShippingContainer>
      <SectionTitle>SHIPPING ADDRESS</SectionTitle>
      <Wrapper>
        <RowFlexBox>
          <LeftInputBox>
            <Label>First Name</Label>
            <Input />
          </LeftInputBox>
          <RightInputBox>
            <Label>Last Name</Label>
            <Input />
          </RightInputBox>
        </RowFlexBox>

        <SingleInputBox>
          <Label>Last Name</Label>
          <Input />
        </SingleInputBox>
      </Wrapper>
    </ShippingContainer>
  );
};
const ShippingContainer = styled.div``;
const Wrapper = styled.div``;
const Label = styled.label`
  ${baseLabel}
  display:block;
`;
// const SingleInputFlexBox = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const RowFlexBox = styled.div`
  display: flex;
`;
const LeftInputBox = styled.div`
  width: 45%;
  margin-right: 2rem;
`; //有要分成兩半時使用
const RightInputBox = styled.div`
  width: 50%;
`;
const SingleInputBox = styled.div`
  width: 100%;
`;
const Input = styled.input`
  ${baseInput}
`;
export default ShippingForm;
