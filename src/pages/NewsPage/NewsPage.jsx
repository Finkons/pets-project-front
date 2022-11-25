import React, { useEffect, useState } from "react";
import { Container, Title } from "./NewsPage.styled";
import NoticesSearch from "components/NoticesSearch";
import NewsBoard from "components/NewsBoard";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const filter = useSelector(state => state.filter.value);
  useEffect(() => {
    fetch("https://pets-api-m614.onrender.com/api/news/")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  useEffect(() => {
    const filterItems = arr => {
      return filter ? arr?.filter(({ title }) => title?.toLowerCase().includes(filter)) : arr;
    };
    setFilteredItems(filterItems(data));
  }, [filter, data]);

  return (
    <Container>
      <Title>News</Title>
      <NoticesSearch />
      {filteredItems && <NewsBoard events={filteredItems} />}
      <Outlet />
    </Container>
  );
}
