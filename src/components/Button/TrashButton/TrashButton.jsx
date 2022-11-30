import PropTypes from "prop-types";
import { TrashBtn } from "./TrashButton.styled";
import Icon from "../icons/index";

export const TrashButton = ({ onClick, className }) => {
  return (
    <TrashBtn onClick={onClick} className={className}>
      <Icon.Trash />
    </TrashBtn>
  );
};

TrashButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
