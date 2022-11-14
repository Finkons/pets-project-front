import { useEffect, useState } from "react";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { PET_MODAL_KEYS } from "constants/petInfoKeys";
import Backdrop from "../Backdrop";
import {
  Container,
  ImageThumb,
  Title,
  InfoWrapper,
  InfoItem,
  Description,
  CloseButton,
  AddToFavorites,
  ModalButton,
  ActionButtons,
} from "./ModalNotice.styled";

import modalImage from "../../../img/pet-photos/pet-modal-img.jpg";
import { sampleData } from "./sampleData";

// props = { _id: string, handleModalToggle: ()=>{}, handleAddToFavoritesClick: ()=>{}, authorized: bool }
const ModalNotice = ({ id, handleModalToggle, handleAddToFavoritesClick, authorized }) => {
  const [petData] = useState(sampleData);

  useEffect(() => {
    // fetching pet data by id...
    // ...setPetData(backendData)
  }, [id]);

  useEffect(() => {
    const cleanup = handleEscClick(handleModalToggle);
    return () => cleanup();
  }, [handleModalToggle]);

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <InfoWrapper>
          <ImageThumb src={petData.avatar || modalImage} alt={petData.name} category={petData.category} />
          <div>
            <Title>Сute dog looking for a home</Title>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key }) => (
                <InfoItem key={key} label={label} data={petData[key]} />
              ))}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={petData.comments} />

        {/* will be replaced with styled button */}
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
        <ActionButtons>
          <AddToFavorites authorized={authorized} onClick={handleAddToFavoritesClick} />
          <ModalButton primary>Contact</ModalButton>
        </ActionButtons>
      </Container>
    </Backdrop>
  );
};

export default ModalNotice;
