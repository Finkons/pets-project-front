import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { notifyError, notifySuccess } from "helpers/toastNotifications";
import { fetchById, deleteById } from "api/fetchPets";
import { PET_MODAL_KEYS, NOTICE_CATEGORY_LABELS } from "constants/petInfoKeys";
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
  DeleteButton,
  ActionButtons,
} from "./ModalNotice.styled";

import modalImage from "../../../img/pet-photos/pet-modal-img.jpg";

// props = { _id: string, handleModalToggle: ()=>{}, handleAddToFavoritesClick: ()=>{}}
const ModalNotice = ({ id, handleModalToggle, handleAddToFavoritesClick }) => {
  const [petData, setPetData] = useState({});
  const currentUserEmail = useSelector(authSelectors.getUserEmail);
  const ownPet = useMemo(() => petData?.owner?.email === currentUserEmail, [currentUserEmail, petData?.owner?.email]);

  useEffect(() => {
    (async () => {
      const data = await fetchById(id);
      setPetData(data);
    })();
  }, [id]);

  useEffect(() => {
    const cleanup = handleEscClick(handleModalToggle);
    return () => cleanup();
  }, [handleModalToggle]);

  const handleDeleteClick = async () => {
    try {
      const result = await deleteById(id);
      notifySuccess(result.message);
    } catch ({ response: { data } }) {
      notifyError(data.message);
    }
  };

  const handleContactClick = () => {
    window.open(`tel:${petData.owner.phone}`);
  };

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <InfoWrapper>
          <ImageThumb src={petData.avatarURL || modalImage} alt={petData.name} category={NOTICE_CATEGORY_LABELS[petData.category]} />
          <div>
            <Title>{petData.title}</Title>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key, nested, values, category }) => {
                if (nested) {
                  return values.map(({ field, label }) => <InfoItem key={field} label={label} data={petData[key] && petData[key][field]} />);
                }
                if (category && category !== petData.category) return null;

                return <InfoItem key={key} label={label} data={petData[key]} />;
              })}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={petData.comments} />

        {/* will be replaced with styled button */}
        <CloseButton onClick={handleModalToggle}>X</CloseButton>
        {ownPet && <DeleteButton onClick={handleDeleteClick} />}
        <ActionButtons>
          <AddToFavorites authorized={Boolean(currentUserEmail)} onClick={handleAddToFavoritesClick} />
          <ModalButton primary onClick={handleContactClick}>
            Contact
          </ModalButton>
        </ActionButtons>
      </Container>
    </Backdrop>
  );
};

export default ModalNotice;
