import * as Yup from "yup";
import {
  Container,
  ModalCloseButton,
  Title,
  Text,
  CategoryWrap,
  CategoryInput,
  CategoryLabel,
  TextWrap,
  TextFild,
  TextLabel,
  BreedWrap,
  SexWrap,
  SexInput,
  SexImage,
  SexLabel,
  FileButton,
  CommentsWrap,
  CommentsFild,
} from "./AddNoticeModal.styled";
import { useRef, useEffect, useState } from "react";
import Wizard from "components/Modal/AddNoticeModal/MultiStepForm";
import Male from "../../../img/addnotice/male.svg";
import Female from "../../../img/addnotice/female.svg";
import Upload from "../../../img/addnotice/uploadfile.svg";
import Backdrop from "../Backdrop";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";

import { useAddNoticeMutation } from "redux/notices/noticesApi"; // import hook for api

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const WizardStep = ({ children }) => children;

const AddNoticeModal = ({ handleModalToggle }) => {
  const [isSell, setIsSell] = useState(false);
  const [upload, setUpload] = useState();
  const [uploadUrl, setUploadUrl] = useState([]);
  const [filename, setFileName] = useState("");
  const hiddenFileInput = useRef(null);

  const [addNotice, { isLoading: isAdding }] = useAddNoticeMutation(); // create fn for adding and get status

  const initialValues = {
    category: "lost/found",
    title: "",
    name: "",
    birthday: "",
    breed: "",
    sex: "male",
    location: "",
    price: "",
    comments: "",
  };

  useEffect(() => {
    const escClose = handleEscClick(handleModalToggle);
    return () => escClose();
  }, [handleModalToggle]);

  const handlePriceField = value => {
    if (value.category === "sell") {
      setIsSell(true);
    }
    console.log("Step1 onSubmit", isSell);
  };

  const handleUploadClick = event => {
    hiddenFileInput.current.click();
  };

  const handleUploadChange = event => {
    if (event.target.files.length !== 0) {
      setUploadUrl(uploadUrl => [...uploadUrl, URL.createObjectURL(event.target.files[0])]);
      setFileName(event.target.files[0].name);
      setUpload(event.target.files[0]);
    }
  };

  const handleFormSubmit = async values => {
    try {
      let formData = new FormData();
      formData.append("image", upload);
      console.log(formData);

      await addNotice(values); //rtk query hook for api
      console.log(isAdding); // fetching status here
      console.log("Form values", values);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container extended={isSell}>
        <ModalCloseButton onClick={handleModalToggle} />
        <Title>Add pet</Title>

        <Wizard
          initialValues={initialValues}
          // onSubmit={async values =>
          //   sleep(300).then(() => {
          //     addNotice(values); //rtk query hook for api
          //     console.log(isAdding); // fetching status here
          //     console.log("Wizard submit", values);
          //     console.log(avatar);
          //   })
          // }
          onSubmit={handleFormSubmit}
          handleCancelModal={handleModalToggle}
          handlePriceField={value => console.log("Next click", value)}
        >
          <WizardStep
            onSubmit={handlePriceField}
            validationSchema={Yup.object({
              category: Yup.string().required("required"),
            })}
          >
            <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
            <div>
              <CategoryWrap role="group" aria-labelledby="my-radio-group">
                <CategoryInput id="lost/found" type="radio" name="category" value="lost/found" />
                <CategoryLabel htmlFor="lost/found">lost/found</CategoryLabel>

                <CategoryInput id="in good hands" type="radio" name="category" value="in good hands" />
                <CategoryLabel htmlFor="in good hands">in good hands</CategoryLabel>

                <CategoryInput id="sell" type="radio" name="category" value="sell" />
                <CategoryLabel htmlFor="sell">sell</CategoryLabel>
              </CategoryWrap>
            </div>
            <TextWrap>
              <TextLabel type="text" htmlFor="title">
                Title of ad <span>*</span>
              </TextLabel>
              <TextFild
                id="title"
                name="title"
                placeholder="Type name"
                required
                minLength="2"
                maxLength="48"
                title="Length of title should be 2-16 letters"
              />
            </TextWrap>

            <TextWrap>
              <TextLabel type="text" htmlFor="name">
                Name pet
              </TextLabel>
              <TextFild
                id="name"
                name="name"
                placeholder="Type name pet"
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                minLength="2"
                maxLength="16"
                title="Name may contain only letters, apostrophe, dash and spaces.Length of name should be 2-16 letters"
              />
            </TextWrap>

            <TextWrap>
              <TextLabel type="date" htmlFor="birthday">
                Date of birth
              </TextLabel>
              <TextFild
                id="birthday"
                name="birthday"
                placeholder="Type date of birth"
                required
                pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                title="Birthday should be in format dd.mm.yyyy"
              />
            </TextWrap>
            <BreedWrap>
              <TextLabel type="text" htmlFor="breed">
                Breed
              </TextLabel>
              <TextFild id="breed" name="breed" placeholder="Type breed" required minLength="2" maxLength="24" />
            </BreedWrap>
          </WizardStep>

          {/* SECOND STEP */}

          <WizardStep
            onSubmit={() => console.log("Step2 onSubmit")}
            validationSchema={Yup.object({
              category: Yup.string(),
              price: Yup.number().when("category", { is: "sell", then: Yup.number().required("Price required") }),
            })}
          >
            <SexWrap>
              <p>The sex*:</p>
              <div role="group" aria-labelledby="radio-group">
                <SexInput id="male" type="radio" name="sex" value="male" />
                <SexLabel htmlFor="male">
                  <div>
                    <SexImage src={Male} alt="male" width="54" height="54" />
                  </div>
                  Male
                </SexLabel>

                <SexInput id="female" type="radio" name="sex" value="female" />
                <SexLabel htmlFor="female">
                  <div>
                    <SexImage src={Female} alt="female" width="39" height="60" />
                  </div>
                  Female
                </SexLabel>
              </div>
            </SexWrap>

            <TextWrap>
              <TextLabel type="text" htmlFor="location">
                Location*:
              </TextLabel>
              <TextFild id="location" name="location" placeholder="Type location" required />
            </TextWrap>

            {isSell && (
              <TextWrap>
                <TextLabel type="number" htmlFor="price">
                  Prices<span>*</span>:
                </TextLabel>
                <TextFild id="price" name="price" placeholder="Type price" pattern="^[1-9][0-9]*$" title="Price should be integer" />
              </TextWrap>
            )}
            <div>
              <TextWrap>
                <TextLabel htmlFor="">Load the pet’s image:</TextLabel>
                <input
                  type="file"
                  encType="multipart/form-data"
                  name="avatar"
                  style={{ display: "none" }}
                  ref={hiddenFileInput}
                  onChange={handleUploadChange}
                />

                <FileButton type="button" onClick={handleUploadClick}>
                  <img src={Upload} alt="upload file" width="48" height="48" />
                </FileButton>
              </TextWrap>
              <div>
                <img width="100" height="100" src={[...uploadUrl]} alt="avatar" />
                <p>File: {filename} attached </p>
              </div>
            </div>

            <CommentsWrap>
              <TextLabel type="text" htmlFor="comments">
                Comments
              </TextLabel>
              <CommentsFild
                id="comments"
                name="comments"
                placeholder="Type comment"
                minLength="8"
                maxLength="120"
                title="Comments should have minimum 8 letters"
                required
              />
            </CommentsWrap>
          </WizardStep>
        </Wizard>
      </Container>
    </Backdrop>
  );
};

export default AddNoticeModal;
