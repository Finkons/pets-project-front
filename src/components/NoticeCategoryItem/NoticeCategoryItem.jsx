import { useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { NOTICE_ITEM_KEYS, NOTICE_CATEGORY_LABELS } from "constants/petInfoKeys";
import { notifyWarning } from "helpers/toastNotifications";
import ModalNotice from "components/Modal/ModalNotice";

import { Container, InfoItem, ImageWrapper, CategoryLabel, InfoWrapper, Title, AddToFavorites } from "./NoticeCategoryItem.styled";
import { LearnMoreBtn } from "components/Button/LearnMoreButton/LearnMoreButton.styled";

import itemImage from "../../img/pet-photos/notice-item-img.jpg";

// props = { data: { }}
const NoticeCategoryItem = ({ data }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [expanded, setExpanded] = useState(false);

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
        <ImageWrapper>
          <img src={data.avatar || itemImage} alt={data.title} />
          <CategoryLabel>{NOTICE_CATEGORY_LABELS[data?.category]}</CategoryLabel>
        </ImageWrapper>

        <InfoWrapper>
          <Title>{data.title}</Title>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key, category }) => {
              if (category && category !== data.category) return null;
              return <InfoItem key={key} label={label} data={data[key]} />;
            })}
          </ul>
        </InfoWrapper>
        <LearnMoreBtn onClick={handleModalToggle}>Learn more</LearnMoreBtn>
        <AddToFavorites onClick={handleAddToFavoritesClick} authorized={isLoggedIn} />
      </Container>

      {expanded && <ModalNotice id={data._id} handleModalToggle={handleModalToggle} handleAddToFavoritesClick={handleAddToFavoritesClick} />}
    </>
  );
};

export default NoticeCategoryItem;
