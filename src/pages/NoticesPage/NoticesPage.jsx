import { Container, Title, Div } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";
import Loader from "components/Loader";
import { useParams } from "react-router-dom";
import { useGetNoticesByCategoryQuery, useGetFavoriteNoticesQuery, useGetUserNoticesQuery } from "redux/notices/noticesApi";
import { useSelector } from "react-redux";

export default function NoticesPage() {
  const [filteredItems, setFilteredItems] = useState([]);
  const { categoryName } = useParams();
  const filter = useSelector(state => state.filter.value);

  const {
    data: firstNotices = [],

    isLoading: firstNoticesLoad,
  } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === "favorite" || categoryName === "own",
  });
  const { data: favorite = [], isLoading: favoriteLoading } = useGetFavoriteNoticesQuery();
  const { data: userNotices = [], isLoading: userNoticesLoading } = useGetUserNoticesQuery();

  useEffect(() => {
    const filterItems = arr => {
      return filter ? arr?.filter(({ title }) => title?.toLowerCase().includes(filter)) : arr;
    };
    if (categoryName === "sell" || "for-free" || "lost-found") {
      setFilteredItems(filterItems(firstNotices));
    }
    if (categoryName === "favorite") {
      setFilteredItems(filterItems(favorite));
    }
    if (categoryName === "own") {
      setFilteredItems(filterItems(userNotices));
    }
  }, [categoryName, favorite, filter, firstNotices, setFilteredItems, userNotices]);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Div>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </Div>
      {firstNoticesLoad || favoriteLoading || userNoticesLoading ? <Loader /> : <NoticesCategoriesList petsList={filteredItems} />}
    </Container>
  );
}
