import { useState } from "react";
import { NOTICE_ITEM_KEYS } from "constants/petInfoKeys";
import { notifyWarning } from "helpers/toastNotifications";
import ModalNotice from "components/Modal/ModalNotice";

import { Container, InfoItem, ImageWrapper, CategoryLabel, InfoWrapper, Title, AddToFavorites } from "./NoticeCategoryItem.styled";
import { LearnMoreBtn } from "components/Button/LearnMoreButton/LearnMoreButton.styled";

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
  const { category, title } = data;
  return (
    <>
      <Container>
        <ImageWrapper>
          <img src={itemImage} alt={title} />
          {category === "sell" && <CategoryLabel>Sell</CategoryLabel>}
          {category === "lost-found" && <CategoryLabel>Lost/found</CategoryLabel>}
          {category === "for-free" && <CategoryLabel>In good hands</CategoryLabel>}
        </ImageWrapper>

        <InfoWrapper>
          <Title>Cute dog looking for a home</Title>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key }) => (
              <InfoItem key={key} label={label} data={data[key]} />
            ))}
          </ul>
        </InfoWrapper>
        <LearnMoreBtn onClick={handleModalToggle}>Learn more</LearnMoreBtn>
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
