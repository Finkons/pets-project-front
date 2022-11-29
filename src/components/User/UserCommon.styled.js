import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 61px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${p => p.theme.media.tablet} {
    justify-content: left;
    margin-top: 88px;
    margin-right: 32px;
  }

  @media ${p => p.theme.media.desktop} {
    justify-content: flex-start;
    margin-right: 16px;
    margin-top: 0px;
  }
`;

export const ContainerPets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-top: 47px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${p => p.theme.media.tablet} {
    justify-content: left;
    margin-right: 32px;
    margin-left: 32px;
  }

  @media ${p => p.theme.media.desktop} {
    justify-content: flex-start;
    margin-right: 16px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 47px;
`;

export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
    line-height: 38px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 28px;
    line-height: 38px;
    margin-left: 17px;
  }
`;

export const UserTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  letter-spacing: 0.04em;
  // margin-left: 20px;
  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
    line-height: 38px;
    margin-left: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 28px;
    line-height: 38px;
    margin-left: 17px;
  }
`;

export const InfoContainer = styled.ul`
  // display: flex;
`;
