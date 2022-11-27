import { ExitBtn, Text } from "./ExitButton.styled";
import Icon from "../icons";

export const ExitButton = ({ onClick }) => {
  return (
    <>
      <ExitBtn onClick={onClick}>
        <Icon.Exit />
        <Text children={"Log Out"}></Text>
      </ExitBtn>
    </>
  );
};
