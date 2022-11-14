import PropTypes from "prop-types";
import { TitleName } from "./TitleFriends.styled";

export const TitleFriends = ({ text }) => {
  return <TitleName>{text}</TitleName>;
};

TitleFriends.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleFriends;
