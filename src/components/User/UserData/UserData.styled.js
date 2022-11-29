import styled from "@emotion/styled";

export const UserImage = styled.img`
  border-radius: 50%;
  width: 233px;
  margin: auto;
  box-shadow: 0px 4px 14px 0px #0000001c;

  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  font-family: "Manrope";
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 16.39px;
`;

export const InfoItem = styled.p`
  font-weight: 500;
  display: flex;
  flex-grow: 1;
  width: 56px;
  margin-right: min(26px);

  @media ${p => p.theme.media.tablet} {
    margin-right: min(36px);
    width: 83px;
    font-size: 18px;
    line-height: 25px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: min(24px);
    width: 83px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const EditableInfo = styled.p`
  width: 159px;
  font-weight: 400;
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  &:read-write {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 17px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 216px;
    padding-left: 12px;
    font-size: 18px;
    line-height: 25px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 216px;
    padding-left: 12px;
    justify-self: center;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const UserContainer = styled.div`
  align-items: center;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 12px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 16px;

  @media ${p => p.theme.media.tablet} {
    margin-top: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 40px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 24px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${p => p.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: -50px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 36px;
  }
`;

export const Wrapper = styled.div`
  @media ${p => p.theme.media.tablet} {
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;
