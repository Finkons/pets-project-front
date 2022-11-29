import { ExitBtn, Text } from "./ExitButton.styled";
import Icon from "../icons";

export const ExitButton = ({ onClick, children }) => {
  return (
    <ExitBtn onClick={onClick}>
      <Icon.Exit />
      <Text children={children}></Text>
    </ExitBtn>
  );
};
