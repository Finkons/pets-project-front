import React, { useState } from "react";
import { TitleContainer, AddPetButton, Plus, ButtonSection, TitleAdd } from "./PetsData.styled";
import { Title, ContainerPets } from "../UserCommon.styled";
import { ModalAddsPet } from "./ModalAddsPet";
import { PetsUserItem } from "./PetsUserItem";
import { useDeletePetByIdMutation } from "redux/auth/authApi";
import { notifySuccess, notifyError } from "helpers/toastNotifications";

const PetsData = ({ pets }) => {
  const [expanded, setExpanded] = useState(false);
  const [deletePet] = useDeletePetByIdMutation();

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
    </>
  );
};

export default PetsData;
