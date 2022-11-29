import styled from "@emotion/styled";

export const CameraBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 36px;
  padding: 0;
  border: 0;
  background: #ffffff;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media ${p => p.theme.media.tablet} {
    margin-top: 8px;
    margin-bottom: 0px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: -65px;
  }
`;

export const CameraText = styled.p`
  line-height: 22px;
  font-family: "Manrope";
  font-weight: 400;
  font-size: 12px;
  margin-left: 4px;
`;
