import React from "react";
import styled, { css, keyframes } from "styled-components";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { sortOptions } from "../../data/sortOptions";

interface IProps {
  listData: {
    name: string;
    val: string;
    icon?: JSX.Element;
  }[];
  selectedName: string;
  selectedVal?: string;
  fullWidth: boolean;
  needScroll?: boolean;
  active: boolean;
  handleSetSelected?: (params: { name: string; val: string }) => void;
  handleActive?: React.MouseEventHandler<HTMLDivElement>;
}

const Select = ({
  listData,
  selectedName,
  selectedVal,
  active,
  handleActive,
  handleSetSelected,
  fullWidth,
  needScroll,
}: IProps) => {
  return (
    <Container fullWidth={fullWidth}>
      <SelectBtn onClick={(e) => handleActive?.(e)}>
        <SelectBtnText>
          <SelectedValBox>
            <OptionIcon>
              {selectedVal &&
                sortOptions.find((item) => item.val === selectedVal)?.icon}
            </OptionIcon>
            <span>
              <span>{selectedName || "Sort"}</span>
            </span>
          </SelectedValBox>
          {active ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </SelectBtnText>
      </SelectBtn>
      {active && (
        <Options active={active} needScroll={needScroll || false}>
          {listData.map((item, index) => (
            <Option
              key={index}
              onClick={() =>
                handleSetSelected?.({ name: item.name, val: item.val })
              }
            >
              {item.icon && <OptionIcon>{item.icon}</OptionIcon>}
              <OptionText>{item.name}</OptionText>
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
};
const fadeInUp = keyframes`
from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
const Container = styled.div<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  @media (max-width: 950px) {
    width: 100%;
  }
  position: relative;
`;
const SelectBtn = styled.div`
  display: flex;
  @media (min-width: 950px) {
    height: 55px;
  }
  background: #fff;
  padding: 1.3rem;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const SelectBtnText = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  span {
    padding-right: 0.6rem;
  }
`;

const Options = styled.ul<{ active: boolean; needScroll?: boolean }>`
  ${({ needScroll }) => needScroll && "overflow-y: scroll"};
  height: 500px;
  position: absolute;
  width: 100%;
  z-index: 10;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${({ active }) => {
    if (active) {
      return css`
        opacity: 0;
        animation-name: ${fadeInUp};
        -webkit-animation-name: ${fadeInUp};
        animation-duration: 0.4s;
        animation-fill-mode: both;
        -webkit-animation-duration: 0.4s;
        -webkit-animation-fill-mode: both;
      `;
    }
  }}
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  height: 55px;
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 8px;
  align-items: center;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`;
const OptionIcon = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-right: 0.8rem;
`;
const OptionText = styled.span`
  font-size: 1.2rem;
  color: #333;
`;
const SelectedValBox = styled.div`
  display: flex;
  align-items: center;
`;
export default Select;
