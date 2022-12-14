import PropTypes from "prop-types";
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

import modalImage from "img/pet-photos/default.jpg";
import Loader from "components/Loader";

const ModalNotice = ({ id, handleModalToggle, handleAddToFavoritesClick, favorite }) => {
  const { data, isLoading, isSuccess } = useGetNoticeByIdQuery(id);
  const [petData, setPetData] = useState({});
  const currentUserEmail = useSelector(authSelectors.getUserEmail);
  const ownPet = useMemo(() => petData?.owner?.email === currentUserEmail, [currentUserEmail, petData?.owner?.email]);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [deleteNotice, { isLoading: isDeleting }] = useDeleteNoticeMutation();

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
      await deleteNotice(id);
      notifySuccess("Deleted!");
      handleModalToggle();
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
    if (isLoggedIn) {
      notifySuccess("Added to favorites!");
    }
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
        <Close onClick={handleModalToggle} />
        {ownPet && <DeleteButton onClick={handleDeleteClick} />}
        <ActionButtons>
          <AddToFavorites authorized={!favorite && Boolean(currentUserEmail)} onClick={handleAddToFavorites} />
          <ModalButton primary onClick={handleContactClick}>
            Contact
          </ModalButton>
        </ActionButtons>
        {(isLoading || isDeleting) && <Loader />}
      </Container>
    </Backdrop>
  );
};
// { id, handleModalToggle, handleAddToFavoritesClick, favorite }
ModalNotice.propTypes = {
  id: PropTypes.string,
  handleModalToggle: PropTypes.func.isRequired,
  handleAddToFavoritesClick: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default ModalNotice;
