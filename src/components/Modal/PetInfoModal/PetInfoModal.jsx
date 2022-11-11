import { PET_MODAL_KEYS } from "constants/petInfoKeys";
import Backdrop from "../Backdrop";
import { Container, ImageThumb, Title, InfoWrapper, InfoItem, Description } from "./PetInfoModal.styled";

import modalImage from "../../../img/pet-photos/pet-modal-img.jpg";
import { sampleData } from "./sampleData";

// props = { id: string, handleModalToggle: ()=>{} }
const PetInfoModal = ({ id, handleModalToggle }) => {
  return (
    <Backdrop>
      <Container>
        <InfoWrapper>
          <ImageThumb src={modalImage} alt="doge" category="In good hands" />
          <div>
            <Title>Сute dog looking for a home</Title>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key }) => (
                <InfoItem key={key} label={label} data={sampleData[key]} />
              ))}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={sampleData.description} />

        {/* will be replaced with styled button */}
        <button onClick={handleModalToggle}>Close id {id}</button>
      </Container>
    </Backdrop>
  );
};

export default PetInfoModal;
