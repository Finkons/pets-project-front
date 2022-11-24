import React from "react";
import { Container, Title } from "./NewsPage.styled";
import NoticesSearch from "components/NoticesSearch";
import NewsBoard from "components/NewsBoard";
// import data from "./news-board.json";
import { Outlet } from "react-router-dom";

import { Component } from 'react';

export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://pets-api-m614.onrender.com/api/news/')
      .then(res => res.json())

      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;


    // export default function NewsPage() {
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
}
