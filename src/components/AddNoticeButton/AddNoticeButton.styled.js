import styled from "@emotion/styled";

export const Div = styled.div`
  display: flex;
  align-items: center;
  min-width: 140px;
  // margin-bottom: 60px;
`;

export const Label = styled.span`
  display: none;
  @media ${p => p.theme.media.tabletDesktop} {
    display: block;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    margin-right: 22px;
  }
`;

export const LabelMob = styled.span`
  font-size: 12px;
  @media ${p => p.theme.media.tabletDesktop} {
    display: none;
  } ;
`;
export const Button = styled.button`
  position: absolute;
  bottom: -150px;
  right: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-size: 26px;
  color: #fff;
  background-color: #f59256;
  border: 1px solid #f59256;
  @media ${p => p.theme.media.tabletDesktop} {
    position: static;
    z-index: 0;
    width: 45px;
    height: 45px;
  } ;
`;

export const Plus = styled.p`
  color: #fff;
  font-size: 35px;
  text-align: center;
  margin-bottom: 6px;
`;
