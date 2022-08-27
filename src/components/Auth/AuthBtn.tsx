import styled from "styled-components";

import cl from "../../constants/color/color.js";
import { Btn, BtnText } from "./auth.style";

interface IProps {
  btnText: string;
  textColor: keyof typeof cl;
  bgColor: keyof typeof cl;
}

const AuthBtn = ({ btnText, textColor, bgColor }: IProps) => {
  return (
    <BtnBox>
      <Btn bgColor={`${cl[bgColor]}`}>
        <BtnText color={`${cl[textColor]}`}>{btnText}</BtnText>
      </Btn>
    </BtnBox>
  );
};
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default AuthBtn;
