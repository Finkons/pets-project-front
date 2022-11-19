import TitleFriends from "components/TitleFriends";
import EventBoardFriends from "components/EventBoardFriends";
import { Container } from "pages/OurFriendsPage/OurFriendsPage.styled";

// import data from "./our-friends-page.json";
import { Outlet } from "react-router-dom";
import { Component } from 'react';

// export default function OurFriendsPage() {
//   return (
//     <Container>
//       <TitleFriends text="Our friend" />
//       <EventBoardFriends events={data} />
//       <Outlet />
//     </Container>
//   );
// }
export default class OurFriendsPage extends Component {
  
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/friends/')
      .then(res => res.json())
      // .then(console.log)

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