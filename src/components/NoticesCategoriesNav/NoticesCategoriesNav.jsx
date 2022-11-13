import { Button, List, Li } from "./NoticesCategoriesNav.styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function NoticesCategoriesNav({ onCategoryChange }) {
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName === "") {
      return;
    }
    categoryName && onCategoryChange(categoryName);
  }, [categoryName, onCategoryChange]);
  // console.log(categoryName);

  return (
    <List>
      <Li>
        <Button to="/notices/sell">Sell</Button>
      </Li>
      <Li>
        <Button to="/notices/lost-found">lost/found</Button>
      </Li>
      <Li>
        <Button to="/notices/for-free">In good hands</Button>
      </Li>
      <Li>
        <Button to="/notices/favorite">Favorite ads</Button>
      </Li>
      <Li>
        <Button to="/notices/own">My ads</Button>
      </Li>
    </List>
  );
}
