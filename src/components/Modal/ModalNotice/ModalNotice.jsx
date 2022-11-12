import { useEffect, useState } from "react";
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { PET_MODAL_KEYS } from "constants/petInfoKeys";
import Backdrop from "../Backdrop";
import { Container, ImageThumb, Title, InfoWrapper, InfoItem, Description } from "./ModalNotice.styled";

import modalImage from "../../../img/pet-photos/pet-modal-img.jpg";
import { sampleData } from "./sampleData";


// props = { _id: string, handleModalToggle: ()=>{} }
const ModalNotice = ({ id, handleModalToggle }) => {
  const [petData] = useState(sampleData) 

  useEffect(() => { 
    // fetching pet data by id...
    // ...setPetData(backendData)
  }, [id])

  useEffect(() => {
    const cleanup = handleEscClick(handleModalToggle)
    return () => cleanup()
  },[handleModalToggle])

  return (
    <Backdrop onClick={(e) => handleBackdropClick(e, handleModalToggle)}>
      <Container>
        <InfoWrapper>
          <ImageThumb src={petData.avatar || modalImage} alt={petData.name} category={sampleData.category} />
          <div>
            <Title>Сute dog looking for a home</Title>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key }) => (
                <InfoItem key={key} label={label} data={petData[key]} />
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

export default ModalNotice;
