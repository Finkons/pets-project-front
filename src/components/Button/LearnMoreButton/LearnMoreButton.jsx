import PropTypes from "prop-types";
import { LearnMoreBtn } from "./LearnMoreButton.styled";

export const LearnMoreButton = ({ onClick, className }) => {
  return (
    <LearnMoreBtn onClick={onClick} className={className || ""}>
      Learn more
    </LearnMoreBtn>
  );
};

LearnMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
