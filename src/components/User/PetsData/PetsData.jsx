import React, { useState } from "react";
import { AddPetButton, PetsItem, PetsImage, PetsItemPara, Plus, ButtonSection, DeleteButton, InfoContainer } from "./PetsData.styled";
import { TitleContainer, Title, Container } from "../UserCommon.styled";
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
      <Container>
        <TitleContainer>
          <Title>My pets:</Title>
          <ButtonSection>
            <Title>Add pet </Title>
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
      </Container>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
