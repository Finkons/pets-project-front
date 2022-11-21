import React from "react";
import * as GS from "components/User/UserCommon.styled";
import * as S from "./ModalAddsPet.styled";
import Backdrop from "components/Modal/Backdrop";
import { handleBackdropClick } from "helpers/modalHelpers";

const ModalAddsPet = ({ handleModalToggle }) => {
  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <GS.Container>
        <S.Form>
          <GS.TitleContainer>
            <GS.Title>Add pet</GS.Title>
          </GS.TitleContainer>
          <S.Label>Name pet</S.Label>
          {/* <S.TextField
            id="title"
            name="title"
            placeholder="Type name pet"
            required
            minLength="2"
            maxLength="48"
            title="Length of title should be 2-16 letters"
          /> */}
          <S.Label>Date of birth</S.Label>
          {/* <S.TextField
            id="birthday"
            name="birthday"
            placeholder="Type date of birth"
            required
            minLength="2"
            maxLength="48"
            title="Length of title should be 2-16 letters"
          /> */}
          <S.Label>Breed</S.Label>
          {/* <S.TextField
            id="breed"
            name="breed"
            placeholder="Type breed"
            required
            minLength="2"
            maxLength="48"
            title="Length of title should be 2-16 letters"
          /> */}
        </S.Form>
      </GS.Container>
    </Backdrop>
  );
};

export default ModalAddsPet;
