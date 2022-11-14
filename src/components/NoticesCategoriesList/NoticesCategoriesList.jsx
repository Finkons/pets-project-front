import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List, Item } from "./NoticesCategoriesList.styled";

export default function NoticesCategoriesList({ petsList }) {
  return (
    <List>
      {petsList.map(item => (
        <Item key={item._id}>
          <NoticeCategoryItem data={item} />
        </Item>
      ))}
    </List>
  );
}
