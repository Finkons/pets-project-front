import TitleFriends from "components/TitleFriends";
import EventBoardFriends from "components/EventBoardFriends";
import { Container } from "pages/OurFriendsPage/OurFriendsPage.styled";

import data from "./our-friends-page.json";
import { Outlet } from "react-router-dom";

export default function OurFriendsPage() {
  return (
    <Container>
      <TitleFriends text="Our friend" />
      <EventBoardFriends events={data} />
      <Outlet />
    </Container>
  );
}
