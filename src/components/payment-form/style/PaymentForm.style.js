import styled from "styled-components";
import cl from "../../../constants/color/color";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 2rem;
`;
export const SectionTitleBox = styled.div`
  text-align: left;

  width: 100%;
`;
export const SectionTitle = styled.h2`
  padding-top: 2rem;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const PayBtn = styled.button.attrs((props) => ({
  type: "submit",
}))`
  background: ${cl.dark};
  color: ${cl.white};
  padding: 0.2rem;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  display: block;
  margin-top: 2rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  cursor: pointer;
`;
