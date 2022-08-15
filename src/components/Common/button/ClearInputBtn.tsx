import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import cl from "../../../constants/color/color";

interface IProps {
  clearInputHandler: () => void;
}

const ClearInputBtn = ({ clearInputHandler }: IProps) => {
  return (
    <ClearBtn>
      <IconBox onClick={clearInputHandler}>
        <IoIosClose />
      </IconBox>
    </ClearBtn>
  );
};
const ClearBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 20%;
`;
const IconBox = styled.div`
  background: ${cl.plusGray};
  color: ${cl.darkenGray};
  border-radius: 50%;
  font-size: 1.5rem;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default ClearInputBtn;
