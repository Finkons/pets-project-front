import Backdrop from "../Backdrop";
import { Container, ImageThumb, Title, InfoWrapper, InfoItem, Description } from "./PetInfoModal.styled";

import modalImage from "../../../img/pet-modal-img.jpg";
import { sampleData, sampleText } from "./sampleData";

// expects pet ID and/or DATA
// and handleCloseBtnClick function
const PetInfoModal = () => {
  return (
    <Backdrop>
      <Container>
        <InfoWrapper>
          <ImageThumb src={modalImage} alt="doge" category="In good hands" />
          <div>
            <Title>Сute dog looking for a home</Title>
            <ul>
              {sampleData.map(({ label, data }) => (
                <InfoItem key={label} label={label} data={data} />
              ))}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={sampleText} />
      </Container>
    </Backdrop>
  );
};

export default PetInfoModal;
