import React, { useState } from "react";
import { TitleContainer, AddPetButton, Plus, ButtonSection, TitleAdd } from "./PetsData.styled";
import { Title, ContainerPets } from "../UserCommon.styled";
import { ModalAddsPet } from "./ModalAddsPet";
import { PetsUserItem } from "./PetsUserItem";
// import { ImListNumbered } from "react-icons/im";

// import { useDeletePetByIdMutation } from "redux/userPets/userPetsApi";

const PetsData = ({ pets }) => {
  const [expanded, setExpanded] = useState(false);
  // const [deletePet] = useDeletePetByIdMutation();

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
        {/* {pets?.map(({ avatarURL, breed, comments, name, _id }) => (
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
        ))} */}
        {pets ? (
          pets.map(({ avatarURL, breed, comments, name, _id, date }) => (
            <PetsUserItem avatarURL={avatarURL} breed={breed} comments={comments} name={name} key={_id} date={date} />
          ))
        ) : (
          <p>No pets</p>
        )}
      </ContainerPets>

      {expanded && <ModalAddsPet handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
