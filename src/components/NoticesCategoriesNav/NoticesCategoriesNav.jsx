import { Button, List } from "./NoticesCategoriesNav.styled";

export default function NoticesCategoriesNav() {
  return (
    <List>
      <li style={{ marginRight: 12 }}>
        <Button to="/notices/sell">Sell</Button>
      </li>
      <li style={{ marginRight: 12 }}>
        <Button to="/notices/lost-found">lost/found</Button>
      </li>
      <li style={{ marginRight: 12 }}>
        <Button to="/notices/for-free">In good hands</Button>
      </li>
      <li style={{ marginRight: 12 }}>
        <Button to="/notices/favorite">Favorite ads</Button>
      </li>
      <li>
        <Button to="/notices/own">My ads</Button>
      </li>
    </List>
  );
}
