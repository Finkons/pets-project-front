import React from "react";
import { TrashButton } from "components/Button";
import { AddPetButton, PetsItem, PetsImage, PetsItemPara } from "./PetsData.styled";
import { TitleContainer, Title, InfoContainer, Container } from "../UserCommon.styled";

const PetsData = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>My pets:</Title>
        <AddPetButton>
          <Title>Add pet </Title>
          <button>Add</button>
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
  );
};

export default PetsData;
