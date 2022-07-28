import React from "react";
import styled from "styled-components";

import cl from "../../constants/color/color";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <TitleBox>
      <SymbolBox>
        <TitleSymbol />
      </SymbolBox>
      <Title>{title}</Title>
    </TitleBox>
  );
};
const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${cl.purple};
`;
const SymbolBox = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
`;
const TitleSymbol = styled.div`
  width: 10px;
  height: 20px;
  border-radius: 10px;
  background-color: ${cl.purple};
  margin-right: 1rem;
`;
export default SectionTitle;
