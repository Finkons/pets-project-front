import PropTypes from "prop-types";
import { Event, LinkCompany, Title, Logo, LogoPosition, Item, Info, InfoLink, ContentPosition, Button } from "./EventFriends.styled";
import ModalTimeFriends from "components/ModalTimeFriends";
import { useState } from "react";

export const EventFriends = ({ logo, name, link, workspace, adress, email, phone }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <Event>
      <LinkCompany href={link} target="_blank">
        <Title>{name}</Title>
      </LinkCompany>
      <ContentPosition>
        <LogoPosition>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
        </LogoPosition>
        <Info>
          <li>Time:</li>
          <li>
            {" "}
            <Button onClick={() => setModalActive(true)} type="button">
              {workspace}
            </Button>
          </li>
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
      <ModalTimeFriends active={modalActive} setActive={setModalActive}>
        <ul className="modal__text">
          <li className="text__position">
            MN:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            TU:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            WE:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            TH:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            FR:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            SA:
            <span className="workspace__position">{workspace}</span>
          </li>
          <li className="text__position">
            SU:
            <span className="workspace__position">{workspace}</span>
          </li>
        </ul>
      </ModalTimeFriends>
    </Event>
  );
};

EventFriends.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  workspace: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default EventFriends;
