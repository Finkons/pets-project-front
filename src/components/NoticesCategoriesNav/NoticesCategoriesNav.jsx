import { Button, List, Li } from "./NoticesCategoriesNav.styled";

export default function NoticesCategoriesNav() {
  return (
    <List>
      <Li style={{ marginRight: 12 }}>
        <Button to="/notices/sell">Sell</Button>
      </Li>
      <Li style={{ marginRight: 12 }}>
        <Button to="/notices/lost-found">lost/found</Button>
      </Li>
      <Li style={{ marginRight: 12 }}>
        <Button to="/notices/for-free">In good hands</Button>
      </Li>
      <Li style={{ marginRight: 12 }}>
        <Button to="/notices/favorite">Favorite ads</Button>
      </Li>
      <Li>
        <Button to="/notices/own">My ads</Button>
      </Li>
    </List>
  );
}
