import { Container, Title, Div, NoAdds } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";
import { useParams } from "react-router-dom";
import { useGetNoticesByCategoryQuery, useGetFavoriteNoticesQuery, useGetUserNoticesQuery } from "redux/notices/noticesApi";
import { useSelector } from "react-redux";
// import Loader from "components/Loader";

export default function NoticesPage() {
  const [filteredItems, setFilteredItems] = useState([]);
  const { categoryName } = useParams();
  const filter = useSelector(state => state.filter.value);

  const { data: firstNotices = [] } = useGetNoticesByCategoryQuery(categoryName, {
    skip: categoryName === "favorite" || categoryName === "own",
  });
  const { data: favorite = [] } = useGetFavoriteNoticesQuery();
  const { data: userNotices = [], refetch } = useGetUserNoticesQuery();
  console.log(filteredItems);
  useEffect(() => {
    try {
      const filterItems = arr => {
        return filter ? arr?.filter(({ title }) => title?.toLowerCase().includes(filter.toLowerCase())) : arr;
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
    } catch (error) {
      console.log(error);
    }
  }, [categoryName, favorite, filter, firstNotices, setFilteredItems, userNotices]);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Div>
        <NoticesCategoriesNav onRefetch={refetch} />
        <AddNoticeButton />
      </Div>
      {!filteredItems.length && <NoAdds>There are no ads</NoAdds>}
      <NoticesCategoriesList petsList={filteredItems} />
      {/* {isLoading || favoriteLoading || adsLoading ? <Loader /> : <NoticesCategoriesList petsList={filteredItems} />} */}
    </Container>
  );
}
