import styled from "@emotion/styled";

export const AddPetButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PetsItem = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PetsImage = styled.img`
  border-radius: 20px;
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
`;

export const PetsItemPara = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  color: #000000;
  margin-top: 12px;
`;
