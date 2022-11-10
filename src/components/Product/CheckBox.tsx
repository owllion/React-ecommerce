import { ChangeEventHandler } from "react";
import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../../store/hooks";
enum List {
  Category = "selectedCategory",
  Brand = "selectedBrand",
  Price = "selectedPrice",
}
type ListString = keyof typeof List;

interface IProps {
  item: { name: string; val: string };
  current: ListString;
  handleSetCheckVal: ChangeEventHandler<HTMLInputElement>;
}
const CheckBox = ({ item, current, handleSetCheckVal }: IProps) => {
  const selectedList = useAppSelector((state) => state.product || {});
  type selectedListString =
    | "selectedCategory"
    | "selectedBrand"
    | "selectedPrice";
  return (
    <Container>
      {/* name -> for multi/single choose
       id -> for label */}
      <CheckBoxItem
        type={current !== "Price" ? "checkbox" : "radio"}
        name={current !== "Price" ? item.name : "single"}
        value={item.val}
        id={item.val}
        checked={
          selectedList[List[current] as selectedListString].includes(item.val)
            ? true
            : false
        }
        onChange={(e) => handleSetCheckVal(e)}
      />
      <Label for={item.val}>{item.name}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const pop = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const CheckBoxItem = styled.input`
  transform: scale(1.5);
  accent-color: black;
  /* appearance: none;
  transition: all 0.3s;
  outline: none;
  font-size: 1.5rem;
  font-family: "Font Awesome 5 Free";
  cursor: pointer;
  &::after {
    content: "\f111";
    display: inline-block;
    text-align: center;
    width: 1em;
  }
  &:checked::after {
    font-weight: 900;
    content: "\f058";
    animation: ${pop} 0.3s 1;
  } */
`;
const Label = styled.label.attrs((props: { for: string }) => ({
  for: props.for,
}))`
  padding: 0.5rem 0 0 1.5rem;
  cursor: pointer;
`;
export default CheckBox;
