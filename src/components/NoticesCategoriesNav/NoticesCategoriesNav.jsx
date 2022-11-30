import PropTypes from "prop-types";
import { Button, List, Li } from "./NoticesCategoriesNav.styled";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function NoticesCategoriesNav({ onRefetch }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
      {isLoggedIn && (
        <>
          <Li>
            <Button to="/notices/favorite">Favorite ads</Button>
          </Li>
          <Li>
            <Button onClick={() => onRefetch()} to="/notices/own">
              My ads
            </Button>
          </Li>
        </>
      )}
    </List>
  );
}

NoticesCategoriesNav.propTypes = {
  onRefetch: PropTypes.func.isRequired,
};
