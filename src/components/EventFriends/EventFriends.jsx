import PropTypes from "prop-types";
import { Event, LinkCompany, Title, Logo, LogoPosition, Item, Info, InfoLink, ContentPosition, Button } from "./EventFriends.styled";
import { ModalText, TextPosition, WorkspacePosition } from "components/ModalTimeFriends/ModalTimeFriends.styled";
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
          <li>
            {" "}
            <Button onClick={() => setModalActive(true)} type="button">
              <ContentPosition>Time:</ContentPosition>
              <ContentPosition>{workspace}</ContentPosition>
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
        <ModalText>
          <TextPosition>
            MN:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            TU:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            WE:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            TH:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            FR:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            SA:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
          <TextPosition>
            SU:
            <WorkspacePosition>{workspace}</WorkspacePosition>
          </TextPosition>
        </ModalText>
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
