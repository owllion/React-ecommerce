import { useState } from "react";
import styled from "styled-components";

interface IProps {
  progress: number;
}
const ProgressBar = ({ progress }: IProps) => {
  const [style, setStyle] = useState({});
  return (
    <Progress>
      <ProgressDone>{progress}%</ProgressDone>
    </Progress>
  );
};

const Progress = styled.div`
  background-color: #d8d8d8;
  position: relative;
  margin: 15px 0;
  height: 5px;
  width: 260px;
`;

const ProgressDone = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;
export default ProgressBar;
