import { Container, Title } from "./NoticesPage.styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NoticesCategoriesNav from "components/NoticesCategoriesNav";

export default function NoticesPage() {
  //   const [category, setCategory] = useState("sell");
  //   const [pets, setPets] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    // fetchPets(categoryName).then(data => setPets(data));
  }, [categoryName]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(pets);
  }
  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <form onSubmit={handleSubmit} style={{ marginBottom: 40 }}>
        <input type="text" name="query" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <NoticesCategoriesNav />
    </Container>
  );
}
