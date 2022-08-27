import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const BackBtn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <>
      <Btn onClick={() => handleNavigate()} type="button">
        <IoIosArrowBack />
      </Btn>
    </>
  );
};
const Btn = styled.button`
  white-space: nowrap;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  width: 38px;
  height: 38px;
  display: flex;
  /* margin-left: -10px;
  margin-bottom: 10px; */
  background: rgb(246, 246, 246);
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
`;
export default BackBtn;
