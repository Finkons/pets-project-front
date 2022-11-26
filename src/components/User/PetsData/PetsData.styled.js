import styled from "@emotion/styled";
import { TrashButton } from "components/Button";

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AddPetButton = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 26px;
  color: #fff;
  background-color: #f59256;
  border: 1px solid #f59256;
`;

export const Plus = styled.p`
  color: #fff;
  font-size: 35px;
  text-align: center;
  margin-bottom: 6px;
`;

export const PetsItem = styled.div`
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    margin-top: 24px;
    flex-direction: row;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 24px;
    flex-direction: row;
  }
`;

export const PetsImage = styled.img`
  border-radius: 20px;
  width: 233px;
  height: 233px;
  @media ${p => p.theme.media.tablet} {
    border-radius: 40px;
    margin-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    border-radius: 40px;
    margin-right: 32px;
  }
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
  font-size: 12px;
  line-height: 16px;
  @media ${p => p.theme.media.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DeleteButton = styled(TrashButton)`
  position: absolute;
  right: 0;
  top: 0;
`;
