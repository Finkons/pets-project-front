import { useState } from "react";
import { NOTICE_ITEM_KEYS } from "constants/petInfoKeys";
import PetInfoModal from "components/Modal/PetInfoModal";
import { Container, ImageThumb, InfoItem, InfoWrapper, Title } from "./NoticeCategoryItem.styled";

import itemImage from "../../img/pet-photos/notice-item-img.jpg";
import { sampleData } from "./sampleData";

// props = { data: { }, ? category: string }
const NoticeCategoryItem = ({ data = sampleData, category }) => {
  const [expanded, setExpanded] = useState(false);

  const handleModalToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container>
        <ImageThumb src={itemImage} category="lost/found" />
        <InfoWrapper>
          <Title>Good boi looking for a home</Title>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key }) => (
              <InfoItem key={key} label={label} data={data[key]} />
            ))}
          </ul>
        </InfoWrapper>

        {/* will be replaced with styled button */}
        <button onClick={handleModalToggle}>Learn more</button>
      </Container>

      {expanded && <PetInfoModal id={data.id} handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default NoticeCategoryItem;
