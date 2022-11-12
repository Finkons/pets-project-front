import { useState } from "react";
import { NOTICE_ITEM_KEYS } from "constants/petInfoKeys";
import ModalNotice from "components/Modal/ModalNotice";
import { Container, ImageThumb, InfoItem, InfoWrapper, Title } from "./NoticeCategoryItem.styled";

import itemImage from "../../img/pet-photos/notice-item-img.jpg";
import { sampleData } from "./sampleData";

// props = { data: { }}
const NoticeCategoryItem = ({ data = sampleData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleModalToggle = () => {
    setExpanded(!expanded);
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

        {/* will be replaced with styled button */}
        <button onClick={handleModalToggle}>Learn more</button>
      </Container>

      {expanded && <ModalNotice id={data._id} handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default NoticeCategoryItem;
