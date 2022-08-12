import styled, { css } from "styled-components";
import cl from "../../constants/color/color";

const sizeList = ["XS", "S", "M", "L", "XL"];

interface IProps {
  setSizeHandler: (index: number) => void;
  selectedSizeIndex: number;
}
const SizeSelect = ({ setSizeHandler, selectedSizeIndex }: IProps) => {
  return (
    <SizeContainer>
      <SizeTitle>Size</SizeTitle>
      <SizeItems>
        {sizeList.map((size, index) => (
          <SizeItem
            key={index}
            onClick={() => setSizeHandler(index)}
            nowIndex={index}
            nowSelected={selectedSizeIndex}
          >
            {size}
          </SizeItem>
        ))}
      </SizeItems>
    </SizeContainer>
  );
};

const SizeContainer = styled.div`
  padding: 0.4rem 0.4rem 0.4rem 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const SizeTitle = styled.span`
  font-size: 1.2rem;
  padding-right: 1.7rem;
  width: 60px;
  @media (max-width: 767px) {
    padding-bottom: 0.5rem;
  }
`;
const SizeItems = styled.ul`
  display: flex;
`;
const SizeItem = styled.li<{ nowSelected: number; nowIndex: number }>`
  margin-right: 1rem;
  @media (max-width: 500px) {
    margin-right: 0.4rem;
  }
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  font-weight: 800;
  font-size: 0.9rem;
  background: ${cl.plusGray};
  ${({ nowSelected, nowIndex }) =>
    nowSelected === nowIndex &&
    css`
      background: ${cl.dark};
      color: ${cl.white};
    `};
`;
export default SizeSelect;
