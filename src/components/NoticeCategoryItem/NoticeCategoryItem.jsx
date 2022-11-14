import { useState } from "react";
import { NOTICE_ITEM_KEYS } from "constants/petInfoKeys";
import { notifyWarning } from "helpers/toastNotifications";
import ModalNotice from "components/Modal/ModalNotice";
import { Container, ImageThumb, InfoItem, InfoWrapper, Title, LearnMore, AddToFavorites } from "./NoticeCategoryItem.styled";
import itemImage from "../../img/pet-photos/notice-item-img.jpg";
import { sampleData } from "./sampleData";

// props = { data: { }}
const NoticeCategoryItem = ({ data = sampleData }) => {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn] = useState(false);

  const handleModalToggle = () => {
    setExpanded(!expanded);
  };

  const handleAddToFavoritesClick = () => {
    if (!isLoggedIn) return notifyWarning("You need to log in to perform this action");

    // ...do some logic...
    console.log("Added to favorites");
  };

  return (
    <>
      <Container>
        <ImageThumb src={itemImage} alt={data.title} category={data.category} />
        <InfoWrapper>
          <Title>Good boi looking for a home</Title>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key }) => (
              <InfoItem key={key} label={label} data={data[key]} />
            ))}
          </ul>
        </InfoWrapper>
        <LearnMore onClick={handleModalToggle}>Learn more</LearnMore>
        <AddToFavorites onClick={handleAddToFavoritesClick} authorized={isLoggedIn} />
      </Container>

      {expanded && (
        <ModalNotice
          id={data._id}
          handleModalToggle={handleModalToggle}
          handleAddToFavoritesClick={handleAddToFavoritesClick}
          authorized={isLoggedIn}
        />
      )}
    </>
  );
};

export default NoticeCategoryItem;
