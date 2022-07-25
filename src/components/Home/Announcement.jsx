import React from "react";

import styled from "styled-components";
import cl from "../../constants/color/color";

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};
const Container = styled.div`
  height: 30px;
  background-color: ${cl.dark};
  color: ${cl.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.9rem;
`;

export default Announcement;
