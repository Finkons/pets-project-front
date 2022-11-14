import PropTypes from "prop-types";
import { Event, Title, Logo, LogoPosition, Item, Info, InfoLink, ContentPosition } from "./EventFriends.styled";

export const EventFriends = ({ image, name, time, adress, email, phone }) => {
  return (
    <Event>
      <Title>{name}</Title>
      <ContentPosition>
        <LogoPosition>
          <Logo>
            <img src={image} alt="" />
          </Logo>
        </LogoPosition>
        <Info>
          <li>Time:</li>
          <li>{time}</li>
          <Item>Adress:</Item>
          <li>{adress}</li>
          <Item>Email:</Item>
          <li>
            <InfoLink href="mailto:">{email}</InfoLink>
          </li>
          <Item>Phone:</Item>
          <li>
            <InfoLink href="tel:">{phone}</InfoLink>
          </li>
        </Info>
      </ContentPosition>
    </Event>
  );
};

EventFriends.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default EventFriends;
