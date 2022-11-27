import styled from "@emotion/styled";

export const UserImage = styled.img`
  border-radius: 50%;
  width: 233px;
`;

export const ItemContainer = styled.div`
  display: flex;
  // justify-content: space-between;
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

export const EditableInfo = styled.p`
  width: 159px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
  border-radius: 45px;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  margin: 0 auto;
  @media ${p => p.theme.media.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding-left: 16px;
  padding-top: 20px;
  padding-right: 12px;
  padding-bottom: 20px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 16px;

  @media ${p => p.theme.media.tablet} {
    flex-direction: row-reverse;
    margin-top: 40px;
    padding: 24px 40px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 24px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${p => p.theme.media.tablet} {
    // margin-right: 52px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 36px;
  }
`;
