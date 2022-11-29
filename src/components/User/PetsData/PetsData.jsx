import React, { useState } from "react";
import { TitleContainer, AddPetButton, Plus, ButtonSection, TitleAdd, NoAdds } from "./PetsData.styled";
import { Title, ContainerPets } from "../UserCommon.styled";
import { ModalAddsPet } from "./ModalAddsPet";
import { PetsUserItem } from "./PetsUserItem";
import { useDeletePetByIdMutation } from "redux/auth/authApi";
import { notifySuccess, notifyError } from "helpers/toastNotifications";
import Loader from "components/Loader/Loader";

const PetsData = ({ pets, isFetching }) => {
  const [expanded, setExpanded] = useState(false);
  const [deletePet, { isLoading }] = useDeletePetByIdMutation();

  const handleModalToggle = () => {
    setExpanded(prev => {
      document.body.className = prev ? "" : "no-scroll";
      return !prev;
    });
  };

  const handleDeleteClick = async id => {
    try {
      await deletePet(id);
      notifySuccess("Deleted!");
    } catch ({ response: { data } }) {
      notifyError(data.message);
    }
  };

  return (
    <>
      <ContainerPets>
        <TitleContainer>
          <Title>My pets:</Title>
          <ButtonSection>
            <TitleAdd>Add pet </TitleAdd>
            <AddPetButton onClick={handleModalToggle}>
              <Plus>+</Plus>
            </AddPetButton>
          </ButtonSection>
        </TitleContainer>
        {!isFetching && !pets.length && <NoAdds>You haven't any ads</NoAdds>}
        {pets?.map(({ avatarURL, breed, comments, name, _id, birthday }) => (
          <PetsUserItem
            avatarURL={avatarURL}
            breed={breed}
            comments={comments}
            name={name}
            key={_id}
            id={_id}
            date={birthday}
            deletePet={handleDeleteClick}
          />
        ))}
      </ContainerPets>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
      {isLoading && <Loader />}
    </>
  );
};

export default PetsData;
