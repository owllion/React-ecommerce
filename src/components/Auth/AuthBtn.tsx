import styled from "styled-components";

import { useAppSelector } from "../../store/hooks";
import cl from "../../constants/color/color.js";
import { Btn, BtnText } from "./auth.style";

interface IProps {
  btnText: string;
  needSwitchText?: boolean;
  textColor: keyof typeof cl;
  bgColor: keyof typeof cl;
}

const AuthBtn = ({ btnText, needSwitchText, textColor, bgColor }: IProps) => {
  const { isLoading } = useAppSelector((state) => state.common);
  return (
    <BtnBox>
      <Btn bgColor={`${cl[bgColor]}`} disabled={isLoading}>
        <BtnText color={`${cl[textColor]}`}>
          {needSwitchText ? (isLoading ? "loading" : btnText) : btnText}
        </BtnText>
      </Btn>
    </BtnBox>
  );
};
const BtnBox = styled.div`
  margin-top: 1.3rem;
`;
export default AuthBtn;
