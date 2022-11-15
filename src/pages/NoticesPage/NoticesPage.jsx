import { Container, Title, Div } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import { fetchPets } from "api/fetchPets";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton";

export default function NoticesPage() {
  const [category, setCategory] = useState("");
  const [pets, setPets] = useState([]);

  console.log(pets);
  useEffect(() => {
    fetchPets(category).then(data => setPets(data));
  }, [category]);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onChange={value => setPets(value)} />
      <Div>
        <NoticesCategoriesNav onCategoryChange={value => setCategory(value)} />
        <AddNoticeButton />
      </Div>

      <NoticesCategoriesList petsList={pets} />
    </Container>
  );
}
