import styled from "styled-components";
import cl from "../../../constants/color/color";

const PwdRuleNumberItem = ({ num }: { num: number }) => {
  return <NumberItem>{num + 1}</NumberItem>;
};
const NumberItem = styled.span`
  display: inline-block;
  border-radius: 50%;
  background: ${cl.textLightGray};
  width: 15px;
  height: 15px;
  font-size: 0.8rem;
  line-height: 15px;
  color: ${cl.white};
  text-align: center;
  margin-right: 0.5rem;
`;
export default PwdRuleNumberItem;
