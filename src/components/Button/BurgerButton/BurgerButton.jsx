import PropTypes from "prop-types";
import { BurgerBtn } from "./BurgerButton.styled";
import Icon from "../icons/index";

export const BurgerButton = ({ onClick }) => {
  return (
    <BurgerBtn onClick={onClick}>
      <Icon.Burger />
    </BurgerBtn>
  );
};

BurgerBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
