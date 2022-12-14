import TitleFriends from "components/TitleFriends";
import EventBoardFriends from "components/EventBoardFriends";
import { Container } from "pages/OurFriendsPage/OurFriendsPage.styled";

import { Outlet } from "react-router-dom";
import { Component } from "react";

export default class OurFriendsPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://pets-api-m614.onrender.com/api/friends/")
      .then(res => res.json())

      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <TitleFriends text="Our friend" />
        <EventBoardFriends events={data} />
        <Outlet />
      </Container>
    );
  }
}
