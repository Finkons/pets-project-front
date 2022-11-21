import React, { useState } from "react";
import { TrashButton } from "components/Button";
import { AddPetButton, PetsItem, PetsImage, PetsItemPara } from "./PetsData.styled";
import { TitleContainer, Title, InfoContainer, Container } from "../UserCommon.styled";
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
          <AddPetButton>
            <Title>Add pet </Title>
            <button onClick={handleModalToggle}>Add</button>
          </AddPetButton>
        </TitleContainer>
        <PetsItem>
          <PetsImage src="https://dummyimage.com/240x240/000/fff" alt="Dummy" />
          <InfoContainer>
            <PetsItemPara>Name: Lorem.</PetsItemPara>
            <PetsItemPara>Date of birth: Lorem, ipsum.</PetsItemPara>
            <PetsItemPara>Breed: Lorem, ipsum.</PetsItemPara>
            <PetsItemPara>Comments: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, error!</PetsItemPara>
            <TrashButton />
          </InfoContainer>
        </PetsItem>
      </Container>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
