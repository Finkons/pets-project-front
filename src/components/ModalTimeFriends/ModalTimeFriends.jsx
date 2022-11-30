import PropTypes from "prop-types";
import "./ModalTimeFriends.css";
import { ModalContent } from "./ModalTimeFriends.styled";

const ModalTimeFriends = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>{children}</ModalContent>
    </div>
  );
};

ModalTimeFriends.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default ModalTimeFriends;
