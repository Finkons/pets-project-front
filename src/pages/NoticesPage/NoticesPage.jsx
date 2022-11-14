import { Container, Title } from "./NoticesPage.styled";
import { useEffect, useState } from "react";
import { fetchPets } from "api/fetchPets";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch";

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
      <NoticesCategoriesNav onCategoryChange={value => setCategory(value)} />
    </Container>
  );
}
