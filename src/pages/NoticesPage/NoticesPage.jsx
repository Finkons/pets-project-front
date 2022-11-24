import { Container, Title, Div } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
// import { fetchPets, fetchFavoritePets, fetchOwnPets } from "api/fetchPets";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";

import { useParams } from "react-router-dom";
import { useGetNoticesByCategoryQuery, useGetFavoriteNoticesQuery, useGetUserNoticesQuery } from "redux/notices/noticesApi";

import { useSelector } from "react-redux";
// import authSelectors from "redux/auth/authSelectors";

export default function NoticesPage() {
  const [filteredItems, setFilteredItems] = useState([]);

  // const token = useSelector(authSelectors.getUserToken);
  const { categoryName } = useParams();
  const filter = useSelector(state => state.filter.value);

  const { data: firstNotices = [] } = useGetNoticesByCategoryQuery(categoryName);
  const { data: favorite = [] } = useGetFavoriteNoticesQuery();
  const { data: userNotices = [] } = useGetUserNoticesQuery();

  // console.log(favorite);
  console.log(filteredItems);
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

  // useEffect(() => {
  // if (categoryName === "favorite") {
  //   setNotices(favorite);
  //   return;
  // }
  // if (categoryName === "own") {
  //   setNotices(userNotices);
  //   return;
  // }
  // setNotices(firstNotices);

  //   if (categoryName === "favorite") {
  //     fetchFavoritePets(token).then(data => setNotices(data));
  //     return;
  //   }
  //   if (categoryName === "own") {
  //     fetchOwnPets(token).then(data => setNotices(data));
  //     return;
  //   }
  //   fetchPets(categoryName).then(data => setNotices(data));
  // }, [categoryName, token]);

  // const filterValue = searchValue ? notices.filter(({ title }) => title.toLowerCase().includes(searchValue)) : notices;
  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Div>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </Div>

      <NoticesCategoriesList petsList={filteredItems} />
    </Container>
  );
}
