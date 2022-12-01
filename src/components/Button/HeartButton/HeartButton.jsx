import { HeartBtn } from "./HeartButton.styled";
import Icon from "../icons/index";

export const HeartButton = ({ onClick, className, authorized }) => {
  return (
    <HeartBtn onClick={onClick} className={className || ""} authorized={authorized}>
      <Icon.Heart />
    </HeartBtn>
  );
};
