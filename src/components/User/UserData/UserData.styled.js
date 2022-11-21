import styled from "@emotion/styled";

export const UserImage = styled.img`
  border-radius: 50%;
  width: 233px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const InfoItem = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const EditableInfo = styled.p`
  width: 159px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
  border-radius: 45px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 16px;
  padding-top: 20px;
  padding-right: 12px;
  padding-bottom: 44px;
  margin-top: 40px;
`;
