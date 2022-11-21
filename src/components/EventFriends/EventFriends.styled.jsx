import styled from "@emotion/styled";

export const Event = styled.div`
  background: #ffffff;
  width: 280px;
  height: 192px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  margin-bottom: 12px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${p => p.theme.media.tablet} {
    margin: 16px;
    width: 336px;
    height: 246px;
    border-radius: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 394.5px;
    height: 287px;
    margin: 16px;
  }
`;

export const Title = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.33;
  display: flex;
  justify-content: center;
  color: #f59256;
  @media ${p => p.theme.media.tablet} {
    margin-top: 16;
    line-height: 1.37;
    font-size: 16px;
    margin-bottom: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const LinkCompany = styled.a`
  text-decoration-line: underline;
  color: #f59256;
`;


export const Logo = styled.div`
  width: 110px;
  height: 78px;
  @media ${p => p.theme.media.tablet} {
    width: 120px;
    height: 85px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 158px;
    height: 112px;
  }
`;

export const LogoPosition = styled.div`
  padding-left: 4px;
`;

export const Item = styled.li`
  margin-top: 4px;
  @media ${p => p.theme.media.tablet} {
    margin-top: 8px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 12px;
  }
`;

export const ContentPosition = styled.div`
  display: flex;
`;

export const Info = styled.ul`
  font-family: "Manrope";
  font-family: sans-serif;
  font-style: normal;
  list-style: none;
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  padding-left: 12px;
  line-height: 1.33;
  margin: 0;
  @media ${p => p.theme.media.tablet} {
    font-size: 14px;
    padding-left: 14px;
    line-height: 1.35;
    color: #000000;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
    line-height: 1.37;
    padding-left: 36px;
  }
`;

export const InfoLink = styled.a`
  font-family: "Manrope";
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #111111;
  text-decoration: none;
  @media ${p => p.theme.media.tablet} {
    font-size: 14px;
    color: #000000;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
  }
`;

export const Button = styled.button`
outline: 0 !important;
border: 0;
background:none;
font-family: 'Manrope';
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1.33;
padding: 0;
&:hover,
&:focus {
  color: #F59256;
  cursor: pointer;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 14px;
    
    line-height: 1.35;
    color: #000000;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
    line-height: 1.37;
    
  }
`;


