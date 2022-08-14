import {
  SectionTitle,
  SectionTitleBox,
  PaymentFormContainer,
} from "./PaymentForm.style";

import SplitFrom from "../PaymentForm";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <SectionTitleBox>
        <SectionTitle>Payment Info</SectionTitle>
      </SectionTitleBox>
      <SplitFrom />
    </PaymentFormContainer>
  );
};

export default PaymentForm;
