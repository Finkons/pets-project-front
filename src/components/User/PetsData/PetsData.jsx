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

const PetsData = () => {
  const [expanded, setExpanded] = useState(false);

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
        <PetsItem>
          <PetsImage src="https://dummyimage.com/240x240/000/fff" alt="Dummy" />
          <InfoContainer>
            <PetsItemPara>Name: Lorem.</PetsItemPara>
            <PetsItemPara>Date of birth: Lorem, ipsum.</PetsItemPara>
            <PetsItemPara>Breed: Lorem, ipsum.</PetsItemPara>
            <PetsItemPara>Comments: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, error!</PetsItemPara>
            <DeleteButton />
          </InfoContainer>
        </PetsItem>
      </ContainerPets>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
