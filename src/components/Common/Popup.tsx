import { useState } from "react";
import styled from "styled-components";
import cl from "../../constants/color/color";
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
            isPopup={true}
            setSizeHandler={setSizeHandler}
            selectedSizeIndex={selectedSizeIndex}
          />
          <CheckBtn>Add To Cart</CheckBtn>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  @media (min-width: 500px) {
    width: 500px;
  }
  border: 1px solid ${cl.lightGray};
  padding: 0.3rem 1.5rem;
  background: ${cl.white};
  border-radius: 10px;
`;
const Title = styled.h2`
  text-align: center;
  margin: 1.2rem;
`;
const CheckBtn = styled(ClearBtn)`
  margin: 1rem 0;
`;

export default Popup;
