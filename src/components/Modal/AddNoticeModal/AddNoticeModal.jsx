import * as Yup from "yup";
import * as S from "./AddNoticeModal.styled";
import { useRef, useEffect, useState } from "react";
import Wizard from "components/Modal/AddNoticeModal/MultiStepForm";
import Male from "../../../img/addnotice/male.svg";
import Female from "../../../img/addnotice/female.svg";
import Upload from "../../../img/addnotice/uploadfile.svg";
import Backdrop from "../Backdrop";
import { NOTICE_CATEGORY_LABELS } from "../../../constants/petInfoKeys";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { useAddNoticeMutation } from "redux/notices/noticesApi"; // import hook for api

const WizardStep = ({ children }) => children;

const AddNoticeModal = ({ handleModalToggle }) => {
  const [isSell, setIsSell] = useState(false);
  const [upload, setUpload] = useState();
  const [uploadUrl, setUploadUrl] = useState([]);
  const [filename, setFileName] = useState("");
  const hiddenFileInput = useRef(null);

  const [addNotice, { isLoading: isAdding }] = useAddNoticeMutation(); // create fn for adding and get status

  const initialValues = {
    category: "lost-found",
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
      const [fileURL] = uploadUrl;
      console.log(fileURL);
      console.log(upload);

      let formValues = new FormData();
      formValues.append("file", upload);

      formValues.append(
        "data",
        JSON.stringify({
          category: values.category,
          title: values.title,
          name: values.name,
          birthday: values.birthday,
          sex: values.sex,
          location: values.location,
          price: values.price,
          comments: values.comments,
        })
      );

      await addNotice(formValues); //rtk query hook for api
      console.log(isAdding); // fetching status here
      console.log("Form values", values);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Backdrop onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <S.Container extended={isSell}>
        <S.ModalCloseButton onClick={handleModalToggle} />
        <S.Title>Add pet</S.Title>

        <Wizard
          initialValues={initialValues}
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
            <S.Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </S.Text>
            <div>
              <S.CategoryWrap role="group" aria-labelledby="my-radio-group">
                <S.CategoryInput id="lost-found" type="radio" name="category" value="lost-found" />
                <S.CategoryLabel htmlFor="lost-found">lost/found</S.CategoryLabel>

                <S.CategoryInput id="for-free" type="radio" name="category" value="for-free" />
                <S.CategoryLabel htmlFor="for-free">in good hands</S.CategoryLabel>

                <S.CategoryInput id="sell" type="radio" name="category" value="sell" />
                <S.CategoryLabel htmlFor="sell">sell</S.CategoryLabel>
              </S.CategoryWrap>
            </div>
            <S.TextWrap>
              <S.TextLabel type="text" htmlFor="title">
                Title of ad <span>*</span>
              </S.TextLabel>
              <S.TextFild
                id="title"
                name="title"
                placeholder="Type name"
                required
                minLength="2"
                maxLength="48"
                title="Length of title should be 2-16 letters"
              />
            </S.TextWrap>

            <S.TextWrap>
              <S.TextLabel type="text" htmlFor="name">
                Name pet
              </S.TextLabel>
              <S.TextFild
                id="name"
                name="name"
                placeholder="Type name pet"
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                minLength="2"
                maxLength="16"
                title="Name may contain only letters, apostrophe, dash and spaces.Length of name should be 2-16 letters"
              />
            </S.TextWrap>

            <S.TextWrap>
              <S.TextLabel type="date" htmlFor="birthday">
                Date of birth
              </S.TextLabel>
              <S.TextFild
                id="birthday"
                name="birthday"
                placeholder="Type date of birth"
                required
                pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                title="Birthday should be in format dd.mm.yyyy"
              />
            </S.TextWrap>
            <S.BreedWrap>
              <S.TextLabel type="text" htmlFor="breed">
                Breed
              </S.TextLabel>
              <S.TextFild id="breed" name="breed" placeholder="Type breed" required minLength="2" maxLength="24" />
            </S.BreedWrap>
          </WizardStep>

          {/* SECOND STEP */}

          <WizardStep
            onSubmit={() => console.log("Step2 onSubmit")}
            validationSchema={Yup.object({
              category: Yup.string(),
              price: Yup.number().when("category", { is: "sell", then: Yup.number().required("Price required") }),
            })}
          >
            <S.SexWrap>
              <p>The sex*:</p>
              <div role="group" aria-labelledby="radio-group">
                <S.SexInput id="male" type="radio" name="sex" value="male" />
                <S.SexLabel htmlFor="male">
                  <div>
                    <S.SexImage src={Male} alt="male" width="54" height="54" />
                  </div>
                  Male
                </S.SexLabel>

                <S.SexInput id="female" type="radio" name="sex" value="female" />
                <S.SexLabel htmlFor="female">
                  <div>
                    <S.SexImage src={Female} alt="female" width="39" height="60" />
                  </div>
                  Female
                </S.SexLabel>
              </div>
            </S.SexWrap>

            <S.TextWrap>
              <S.TextLabel type="text" htmlFor="location">
                Location*:
              </S.TextLabel>
              <S.TextFild id="location" name="location" placeholder="Type location" required />
            </S.TextWrap>

            {isSell && (
              <S.TextWrap>
                <S.TextLabel type="number" htmlFor="price">
                  Prices<span>*</span>:
                </S.TextLabel>
                <S.TextFild id="price" name="price" placeholder="Type price" pattern="^[1-9][0-9]*$" title="Price should be integer" />
              </S.TextWrap>
            )}
            <S.FileWrap>
              <S.TextWrap>
                <S.TextLabel htmlFor="">Load the pet’s image:</S.TextLabel>
                <input
                  type="file"
                  encType="multipart/form-data"
                  name="avatar"
                  style={{ display: "none" }}
                  ref={hiddenFileInput}
                  onChange={handleUploadChange}
                />

                <S.FileButton type="button" onClick={handleUploadClick}>
                  <img src={Upload} alt="upload file" width="48" height="48" />
                </S.FileButton>
              </S.TextWrap>
              {uploadUrl === [] ? (
                <div>
                  <p>No file attached</p>
                </div>
              ) : (
                <S.Preview>
                  <img width="140" height="140" src={[...uploadUrl]} alt="avatar" />
                  <p>File attached </p>
                </S.Preview>
              )}
            </S.FileWrap>

            <S.CommentsWrap>
              <S.TextLabel type="text" htmlFor="comments">
                Comments
              </S.TextLabel>
              <S.CommentsFild
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
      </S.Container>
    </Backdrop>
  );
};

export default AddNoticeModal;