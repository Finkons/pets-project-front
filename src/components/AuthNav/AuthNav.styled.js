import styled from "@emotion/styled";

export const Div = styled.div`
  display: flex;
  margin-left: 34px;
  margin-right: 22px;
  justify-content: center;

  @media ${p => p.theme.media.tablet} {
    display: flex;
    margin-left: 246px;
    margin-right: 0;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    margin-left: auto;
  }
`;

export const AuthBtn = styled.button`
  font-size: 14px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: black;
  height: 35px;
  color: #111111;
  background-color: #ffffff;
  margin-left: 12px;
  padding: 10px 28px;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  &:hover,
  active {
    color: #ffffff;
    background-color: #f59256;
  }
  @media ${p => p.theme.media.tablet} {
    margin-right: auto;
    margin-left: 12px;
    font-size: 15px;
    height: 50px;
    padding: 10px 28px;
    text-align: center;
    font-size: 20px;
    &:hover,
    active {
      color: #ffffff;
      background-color: #f59256;
    }
  }
  @media ${p => p.theme.media.desktop} {
    height: 50px;
    padding: 10px 28px;
    text-align: center;
    font-size: 20px;
    &:hover,
    active {
      color: #ffffff;
      background-color: #f59256;
    }
  }
`;
