import styled, { css } from "styled-components";
import { MainTitle } from "../auth.style";
import SuccessUnderline from "src/assets/login/success-underline.svg";
import ErrorUnderline from "src/assets/login/error-underline.svg";

interface IProps {
  isVerified: boolean;
}

const VerifyStateTitle = ({ isVerified }: IProps) => {
  return (
    <MainTitleBox>
      <MessageBox>
        <MainTitle>
          <HasUnderline>
            <Lines
              isVerified={isVerified}
              underline={isVerified ? SuccessUnderline : ErrorUnderline}
            />
            {isVerified ? "Email has been verified !" : "Token has expired!"}
          </HasUnderline>
        </MainTitle>
      </MessageBox>
    </MainTitleBox>
  );
};
const MainTitleBox = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55px;
  ${MainTitle} {
    text-align: center;
  }
`;
const HasUnderline = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
`;
const Lines = styled.span<{ underline: string; isVerified: boolean }>`
  position: absolute;
  top: -10px;
  right: -17px;
  left: -3px;
  bottom: -3px;
  &:before {
    content: " ";
    position: absolute;
    ${({ isVerified }) =>
      isVerified
        ? css`
            top: -5px;
            left: -6px;
            right: -13px;
            bottom: -9px;
          `
        : css`
            top: -5px;
            left: -81px;
            right: -40px;
            bottom: -12px;
            z-index: -2;
          `}
    background-image: ${({ underline }) => `url(${underline})`};
    background-size: 290px 90px;
    background-position: 100%;
    background-repeat: no-repeat;
    border-left-width: 9px;
    border-right: none;
    border-style: solid;
    -o-border-image: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)) 1 100%;
    border-image: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)) 1 100%;
  }
`;
const MessageBox = styled.div`
  display: flex;
  align-items: center;
`;
export default VerifyStateTitle;
