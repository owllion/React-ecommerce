import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Wizard from "../components/Checkout/Wizard";

const Checkout = () => {
  return (
    <Container>
      <Wizard />
      <Outlet />
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 0 5rem 0;
  }
  padding: 5rem 0;
`;

export default Checkout;
