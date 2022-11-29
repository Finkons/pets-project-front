import React, { useState, useEffect, useRef } from "react";
import * as S from "./ModalAddsPet.styled";
import Backdrop from "components/Modal/Backdrop";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { useAddPetMutation } from "redux/auth/authApi";
import { SUPPORTED_FORMATS } from "constants/petInfoKeys";
import UploadIcon from "img/addnotice/uploadfile.svg";
import Wizard from "components/Modal/AddNoticeModal/MultiStepForm";
import { notifySuccess, notifyError } from "helpers/toastNotifications";
import Loader from "components/Loader";

const WizardStep = ({ children }) => children;

const ModalAddsPet = ({ handleModalToggle }) => {
  const [upload, setUpload] = useState();
  const [uploadUrl, setUploadUrl] = useState([]);
  const [isFormatValid, setIsFormatValid] = useState(true);
  const hiddenFileInput = useRef(null);

  const [addPet, { isLoading }] = useAddPetMutation();

  const initialValues = {
    title: "",
    name: "",
    birthday: "",
    breed: "",
    comments: "",
  };

  const handleUploadClick = event => {
    hiddenFileInput.current.click();
  };

  const handleUploadChange = event => {
    if (event.target.files.length !== 0) {
      setUploadUrl(uploadUrl => [...uploadUrl, URL.createObjectURL(event.target.files[0])]);
      setUpload(event.target.files[0]);
    }
  };

  const handleFormSubmit = async values => {
    try {
      if (!upload) {
        notifyError("Please, load file");
        return;
      }

      if (!SUPPORTED_FORMATS.includes(upload.type)) {
        setIsFormatValid(false);
        notifyError("Please, load image in .jpg, .jpeg, .png, .gif formats");
        return;
      }

      let formValues = new FormData();
      formValues.append("avatar", upload);

      formValues.append(
        "data",
        JSON.stringify({
          breed: values.breed,
          name: values.name,
          birthday: values.birthday,
          location: values.location,
          comments: values.comments,
        })
      );

      await addPet(formValues);
      notifySuccess("Pet has been added!");
      handleModalToggle();
    } catch (err) {
      console.log(err);
    }
  };

  const handleStep = () => {
    console.log("Step1 onSubmit");
  };

  useEffect(() => {
    const escClose = handleEscClick(handleModalToggle);
    return () => escClose();
  }, [handleModalToggle]);

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <S.Container>
        <S.ModalCloseButton onClick={handleModalToggle} />
        <S.TitleContainer>
          <S.Title>Add pet</S.Title>
        </S.TitleContainer>

        <Wizard
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          handleCancelModal={handleModalToggle}
          handlePriceField={value => console.log("Next click", value)}
        >
          <WizardStep onSubmit={handleStep}>
            <S.TextWrap type="text" htmlFor="name">
              <S.TextLabel>Name pet</S.TextLabel>
              <S.TextField
                id="name"
                name="name"
                placeholder="Type name pet"
                required
                minLength="2"
                maxLength="48"
                title="Length of title should be 2-16 letters"
              />
            </S.TextWrap>

            <S.TextWrap>
              <S.TextLabel type="date" htmlFor="birthday">
                Date of birth
              </S.TextLabel>
              <S.TextField
                id="birthday"
                name="birthday"
                placeholder="Type date of birth"
                required
                pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                title="Birthday should be in format dd.mm.yyyy"
              />
            </S.TextWrap>

            <S.TextWrap type="text" htmlFor="breed">
              <S.TextLabel>Breed</S.TextLabel>
              <S.TextField id="breed" name="breed" placeholder="Type breed" required minLength="2" maxLength="24" />
            </S.TextWrap>
          </WizardStep>
          <WizardStep onClick={handleStep}>
            <S.Text>Add photo and some comments </S.Text>
            <S.FileWrap>
              <S.TextWrap>
                <input
                  type="file"
                  encType="multipart/form-data"
                  name="avatar"
                  style={{ display: "none" }}
                  ref={hiddenFileInput}
                  onChange={handleUploadChange}
                />
              </S.TextWrap>
              <S.FileButton type="button" onClick={handleUploadClick}>
                <img src={UploadIcon} alt="upload file" width="48" height="48" />
              </S.FileButton>
              {uploadUrl.length === 0 || !isFormatValid ? (
                <div>
                  <p>No file attached</p>
                </div>
              ) : (
                <S.Preview>
                  <img width="140" height="140" src={[...uploadUrl]} alt="File will be here" />
                </S.Preview>
              )}
            </S.FileWrap>

            <S.CommentsWrap>
              <S.TextLabel type="text" htmlFor="comments">
                Comments
              </S.TextLabel>
              <S.CommentsField
                id="comments"
                name="comments"
                placeholder="Type comment"
                minLength="8"
                maxLength="120"
                title="Comments should have minimum 8 letters"
                required
              />
            </S.CommentsWrap>
          </WizardStep>
        </Wizard>
        {isLoading && <Loader />}
      </S.Container>
    </Backdrop>
  );
};

export default ModalAddsPet;
