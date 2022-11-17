import React from "react";
// import TitleFriends from "components/TitleFriends";
import { Container, Title } from "./NewsPage.styled";
import NoticesSearch from "components/NoticesSearch";
import NewsBoard from "components/NewsBoard";
import data from "./news-board.json";
import { Outlet } from "react-router-dom";


export default function NewsPage() {
  return (
    <Container>
      <Title>
        News
        </Title>
      <NoticesSearch />
      <NewsBoard events={data} />
      <Outlet />
    </Container>
  );
}
