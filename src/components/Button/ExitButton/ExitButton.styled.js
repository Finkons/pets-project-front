import styled from "@emotion/styled";

export const ExitBtn = styled.button`
  display: flex;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: auto;

  @media ${p => p.theme.media.tablet} {
    margin-left: initial;
  }
  @media ${p => p.theme.media.desktop} {
    margin-left: initial;
  }
`;

export const Text = styled.p`
  margin-left: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
`;
