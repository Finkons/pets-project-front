import EventFriends from "components/EventFriends";
import PropTypes from "prop-types";
import { EventBoard } from "./EvenBoardFriends.styled";

export const EventBoardFriends = ({ events }) => {
  return (
    <EventBoard>
      {events.map(({ logo, name, link, workspace, adress, email, phone }) => (
        <EventFriends key={name} logo={logo} name={name} link={link} workspace={workspace} adress={adress} email={email} phone={phone} />
      ))}
    </EventBoard>
  );
};

EventBoardFriends.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      workspace: PropTypes.string.isRequired,
      adress: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default EventBoardFriends;
