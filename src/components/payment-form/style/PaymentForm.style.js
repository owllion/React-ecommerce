import styled from "styled-components";
import cl from "../../../constants/color/color";

export const PaymentFormContainer = styled.div`
  /* width: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
export const SectionTitleBox = styled.div`
  text-align: left;

  width: 100%;
`;
export const SectionTitle = styled.h2``;
export const FormContainer = styled.form`
  /* height: 100px; */
  width: 100%;
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;
export const CardElementBox = styled.div`
  margin-bottom: 2rem;
`;
export const PayBtn = styled.button`
  background: ${cl.dark};
  color: ${cl.white};
  padding: 0.2rem;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;
