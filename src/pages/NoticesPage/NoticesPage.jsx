import { Container, Title, Div } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import { fetchPets, fetchFavoritePets, fetchOwnPets } from "api/fetchPets";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";

import { useParams } from "react-router-dom";
// import { useGetNoticesByCategoryQuery, useGetFavoriteNoticesQuery } from "redux/notices/noticesApi";
// import { useGetFavoriteNoticesQuery } from "redux/notices/noticesApi";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

export default function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // console.log(pets);
  const token = useSelector(authSelectors.getUserToken);
  const { categoryName } = useParams();

  // const { data: firstNotices = [], isError, isFetching } = useGetNoticesByCategoryQuery(categoryName);

  // const { data: favorite = [] } = useGetFavoriteNoticesQuery();
  // setNotices(favorite);
  // creting fn for fetching data by category and status (error, fething)
  console.log(notices, categoryName);

  useEffect(() => {
    // if (firstNotices.length > 0) {
    //   setNotices(firstNotices);
    // }
    // if (favorite.length > 0) {
    //   setNotices(favorite);
    // }
    if (categoryName === "favorite") {
      fetchFavoritePets(token).then(data => setNotices(data));
      return;
    }
    if (categoryName === "own") {
      fetchOwnPets(token).then(data => setNotices(data));
      return;
    }
    fetchPets(categoryName).then(data => setNotices(data));
  }, [categoryName, token]);

  console.log(searchValue);
  // const filterValue = searchValue ? notices.filter(({ title }) => title.toLowerCase().includes(searchValue)) : notices;
  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onChange={value => setSearchValue(value)} />
      <Div>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </Div>

      <NoticesCategoriesList petsList={notices} />
    </Container>
  );
}
