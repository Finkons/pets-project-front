import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useGetNoticeByIdQuery, useDeleteNoticeMutation } from "redux/notices/noticesApi";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { notifyError, notifySuccess, notifyWarning } from "helpers/toastNotifications";
import { PET_MODAL_KEYS, NOTICE_CATEGORY_LABELS } from "constants/petInfoKeys";
import Backdrop from "../Backdrop";
import {
  Container,
  ImageThumb,
  Title,
  InfoWrapper,
  InfoItem,
  Description,
  Close,
  AddToFavorites,
  ModalButton,
  DeleteButton,
  ActionButtons,
} from "./ModalNotice.styled";

import modalImage from "../../../img/pet-photos/pet-modal-img.jpg";

// props = { _id: string, handleModalToggle: ()=>{}, handleAddToFavoritesClick: ()=>{}}
const ModalNotice = ({ id, handleModalToggle, handleAddToFavoritesClick, favorite }) => {
  const { data, isSuccess } = useGetNoticeByIdQuery(id);
  const [petData, setPetData] = useState({});
  const currentUserEmail = useSelector(authSelectors.getUserEmail);
  const ownPet = useMemo(() => petData?.owner?.email === currentUserEmail, [currentUserEmail, petData?.owner?.email]);

  const [deleteNotice] = useDeleteNoticeMutation();

  useEffect(() => {
    if (!isSuccess) return;
    setPetData(data);
  }, [data, isSuccess]);

  useEffect(() => {
    const cleanup = handleEscClick(handleModalToggle);
    return () => cleanup();
  }, [handleModalToggle]);

  const handleDeleteClick = async () => {
    try {
      const result = await deleteNotice(id);
      notifySuccess(result.message);
    } catch ({ response: { data } }) {
      notifyError(data.message);
    }
  };

  const handleContactClick = () => {
    if (!petData?.owner?.phone) return notifyWarning("Owner hasn't provided phone number");
    window.open(`tel:${petData.owner.phone}`);
  };

  const handleAddToFavorites = async () => {
    await handleAddToFavoritesClick();
    notifySuccess("Added to favorites!");
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

                return key === "location" ? (
                  <InfoItem key={key} label={label} data={`${petData[key]?.city || "-"} ${petData[key]?.region || "-"} `} />
                ) : (
                  <InfoItem key={key} label={label} data={petData[key]} />
                );
              })}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={petData.comments} />
        <Close onClick={handleModalToggle} />
        {ownPet && <DeleteButton onClick={handleDeleteClick} />}
        <ActionButtons>
          <AddToFavorites authorized={!favorite && Boolean(currentUserEmail)} onClick={handleAddToFavorites} />
          <ModalButton primary onClick={handleContactClick}>
            Contact
          </ModalButton>
        </ActionButtons>
      </Container>
    </Backdrop>
  );
};

export default ModalNotice;
