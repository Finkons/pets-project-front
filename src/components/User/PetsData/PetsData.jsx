import React, { useState } from "react";
import {
  TitleContainer,
  AddPetButton,
  PetsItem,
  PetsImage,
  PetsItemPara,
  Plus,
  ButtonSection,
  DeleteButton,
  InfoContainer,
  TitleAdd,
} from "./PetsData.styled";
import { Title, ContainerPets } from "../UserCommon.styled";
import { ModalAddsPet } from "./ModalAddsPet";

import { useDeletePetByIdMutation } from "redux/userPets/userPetsApi";

const PetsData = ({ pets }) => {
  const [expanded, setExpanded] = useState(false);

  const [deletePet] = useDeletePetByIdMutation();

  const handleModalToggle = () => {
    setExpanded(prev => {
      document.body.className = prev ? "" : "no-scroll";
      return !prev;
    });
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
        {pets?.map(({ avatarURL, breed, comments, name, _id }) => (
          <PetsItem key={_id}>
            <PetsImage src={avatarURL} alt="petAvatar" />
            <InfoContainer>
              <PetsItemPara>Name: {name}.</PetsItemPara>
              <PetsItemPara>Date of birth: Lorem, ipsum.</PetsItemPara>
              <PetsItemPara>Breed: {breed}.</PetsItemPara>
              <PetsItemPara>Comments: {comments}</PetsItemPara>
              <DeleteButton onClick={() => deletePet(_id)} />
            </InfoContainer>
          </PetsItem>
        ))}
      </ContainerPets>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
