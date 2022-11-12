import { Container } from "./NoticesPage.styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import NoticesCategoriesNav from "components/NoticesCategoriesNav";

export default function NoticesPage() {
  //   const [pets, setPets] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    // NoticesCategoriesNav(categoryName).then(data => setPets(data));
  }, [categoryName]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(pets);
  }
  return (
    <Container>
      <h2>Find your favorite pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}
