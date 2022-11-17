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
  SexLabel,
  FileButton,
  CommentsWrap,
  CommentsFild,
} from "./AddNoticeModal.styled";
import { useRef, useEffect, useState } from "react";
import { ErrorMessage } from "formik";
import Wizard from "components/Modal/AddNoticeModal/MultiStepForm";
import Male from "../../../img/addnotice/male.svg";
import Female from "../../../img/addnotice/female.svg";
import Upload from "../../../img/addnotice/uploadfile.svg";
import Backdrop from "../Backdrop";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
// import { addNotice } from "api/addNotice";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const WizardStep = ({ children }) => children;

const AddNoticeModal = ({ handleModalToggle }) => {
  const [isSell, setIsSell] = useState(false);
  const hiddenFileInput = useRef(null);

  const initialValues = {
    category: "lost/found",
    title: "",
    name: "",
    birthday: "",
    breed: "",
    sex: "male",
    location: "",
    price: "",
    avatar: "",
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
    console.log(value.category);
  };

  const handleUploadClick = event => {
    hiddenFileInput.current.click();
  };

  const handleUploadChange = event => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <ModalCloseButton onClick={handleModalToggle} />
        <Title>Add pet</Title>

        <Wizard
          initialValues={initialValues}
          onSubmit={async values => sleep(300).then(() => console.log("Wizard submit", values))}
          // onSubmit={async values => sleep(300).then(() => addNotice(values))}
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
                <CategoryLabel>
                  <CategoryInput type="radio" name="category" value="lost/found" />
                  lost/found
                </CategoryLabel>

                <CategoryLabel>
                  <CategoryInput type="radio" name="category" value="in good hands" />
                  in good hands
                </CategoryLabel>
                <CategoryLabel>
                  <CategoryInput type="radio" name="category" value="sell" />
                  sell
                </CategoryLabel>
              </CategoryWrap>
              <ErrorMessage className="error" component="div" name="category" />
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
                <SexLabel>
                  <div>
                    <img src={Male} alt="male" width="54" height="54" />
                  </div>
                  <SexInput type="radio" name="sex" value="male" checked />
                  Male
                </SexLabel>
                <SexLabel>
                  <div>
                    <img src={Female} alt="female" width="39" height="60" />
                  </div>
                  <SexInput type="radio" name="sex" value="female" />
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
            <TextWrap>
              <TextLabel htmlFor="">Load the pet’s image:</TextLabel>
              <input type="file" name="avatar" style={{ display: "none" }} ref={hiddenFileInput} onChange={handleUploadChange} />
              <FileButton type="button" onClick={handleUploadClick}>
                <img src={Upload} alt="upload file" width="48" height="48" />
              </FileButton>
            </TextWrap>

            <CommentsWrap>
              <TextLabel type="text" htmlFor="comments">
                Comments
              </TextLabel>
              <CommentsFild id="comments" name="comments" placeholder="Type comment" required />
            </CommentsWrap>
          </WizardStep>
        </Wizard>
      </Container>
    </Backdrop>
  );
};

export default AddNoticeModal;
