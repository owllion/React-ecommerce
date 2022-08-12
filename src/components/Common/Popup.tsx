import { useState } from "react";
import styled from "styled-components";

import { ClearBtn } from "../Product/Filter";
import { Backdrop } from "./SideNav";
import SizeSelect from "../Product/SizeSelect";

const Popup = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const setSizeHandler = (index: number) => {
    setSelectedSizeIndex(index);
  };

  return (
    <>
      <Backdrop />
      <Container>
        <Wrapper>
          <Title>Please select your size</Title>
          <SizeSelect
            setSizeHandler={setSizeHandler}
            selectedSizeIndex={selectedSizeIndex}
          />
          <ClearBtn>Add To Cart</ClearBtn>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  @media (min-width: 500px) {
    width: 60%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 0.3rem 1rem;
`;
const Title = styled.h2`
  text-align: center;
`;
const CheckBtn = styled(ClearBtn)``;

export default Popup;
