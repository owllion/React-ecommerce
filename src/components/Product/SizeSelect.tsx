import styled, { css } from "styled-components";
import cl from "../../constants/color/color";

const sizeList = ["XS", "S", "M", "L", "XL"];

interface IProps {
  setSizeHandler: (index: number) => void;
  selectedSizeIndex: number;
  isPopup: boolean;
}
const SizeSelect = ({ setSizeHandler, selectedSizeIndex, isPopup }: IProps) => {
  return (
    <SizeContainer isPopup={isPopup}>
      <SizeTitle isPopup={isPopup}>Size</SizeTitle>
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

const SizeContainer = styled.div<{ isPopup: boolean }>`
  padding: 0.4rem 0.4rem 0.4rem 0;
  display: flex;
  align-items: center;
  ${({ isPopup }) =>
    isPopup
      ? css`
          flex-direction: column;
        `
      : css`
          @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
          }
        `}
`;
const SizeTitle = styled.span<{ isPopup: boolean }>`
  font-size: 1.2rem;
  padding-right: 1.7rem;
  width: 60px;
  @media (max-width: 767px) {
    padding-bottom: 0.5rem;
  }

  ${({ isPopup }) =>
    isPopup &&
    css`
      padding-right: 1rem;
      width: auto;
      padding-bottom: 1.2rem;
      @media (max-width: 767px) {
        padding-bottom: 1rem;
      }
      position: relative;
      z-index: 1;
      &:after {
        position: absolute;
        content: "";
        margin: 0 auto;
        bottom: 17px;
        left: -16px;
        right: 0;
        width: 77%;
        height: 15%;
        z-index: -1;
        background: ${cl.yellow};
      }
    `}
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
