import PropTypes from "prop-types";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List, Item } from "./NoticesCategoriesList.styled";

export default function NoticesCategoriesList({ petsList }) {
  return (
    <List>
      {petsList &&
        petsList.map(item => (
          <Item key={item._id}>
            <NoticeCategoryItem data={item} />
          </Item>
        ))}
    </List>
  );
}

NoticesCategoriesList.propTypes = {
  petsList: PropTypes.array.isRequired,
};
