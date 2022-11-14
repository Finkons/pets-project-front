import React from "react";
import { TrashButton } from "components/Button";
import { Container, TitleContainer, AddPetButton, Title, PetsItem, PetsImage, PetsItemInfo, PetsItemPara } from "./PetsData.styled";

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
        <PetsItemInfo>
          <PetsItemPara>Name: Lorem.</PetsItemPara>
          <PetsItemPara>Date of birth: Lorem, ipsum.</PetsItemPara>
          <PetsItemPara>Breed: Lorem, ipsum.</PetsItemPara>
          <PetsItemPara>Comments: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, error!</PetsItemPara>
          <TrashButton />
        </PetsItemInfo>
      </PetsItem>
    </Container>
  );
};

export default PetsData;
