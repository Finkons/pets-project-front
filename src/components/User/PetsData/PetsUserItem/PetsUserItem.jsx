import React from "react";

import { DeleteButton, InfoContainer, PetsItem, PetsImage, PetsItemPara } from "./PetsUserItem.styled";

const PetsUserItem = ({ avatarURL, breed, comments, name, date, deletePet, id }) => {
  return (
    <PetsItem>
      <PetsImage src={avatarURL} alt="Avatar URL" />
      <InfoContainer>
        <PetsItemPara>Name: {name}</PetsItemPara>
        <PetsItemPara>Date of birth: {date}</PetsItemPara>
        <PetsItemPara>Breed: {breed}</PetsItemPara>
        <PetsItemPara>Comments: {comments}</PetsItemPara>
      </InfoContainer>
      <DeleteButton onClick={() => deletePet(id)} />
    </PetsItem>
  );
};

export default PetsUserItem;
