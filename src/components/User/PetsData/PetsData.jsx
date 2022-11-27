import React, { useState } from "react";
import { TitleContainer, AddPetButton, Plus, ButtonSection, TitleAdd } from "./PetsData.styled";
import { Title, ContainerPets } from "../UserCommon.styled";
import { ModalAddsPet } from "./ModalAddsPet";
import { PetsUserItem } from "./PetsUserItem";
// import { ImListNumbered } from "react-icons/im";

const PetsData = ({ pets }) => {
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
