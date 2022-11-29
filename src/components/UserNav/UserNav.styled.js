import styled from "@emotion/styled";

export const Div = styled.div`
  justify-content: center;
  @media ${p => p.theme.media.tablet} {
    display: flex;
    margin-left: 246px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    margin-left: auto;
  }
`;

export const UserBtn = styled.button`
  margin: auto;
  font-size: 15px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: black;
  width: 164px;
  height: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  background-color: #f59256;
  cursor: pointer;

  &:active {
    color: #ffffff;
    background-color: #f59256;
  }
  &:hover {
    color: #ffffff;
    background-color: #f59256;
  }

  @media ${p => p.theme.media.tablet} {
    width: 164px;
    height: 44px;
    margin-left: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 164px;
    height: 44px;
  }
`;

export const LogoutBtn = styled.button`
  margin: 10px 110px;
  font-size: 15px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: black;
  width: 100px;
  height: 35px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #111111;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #f59256;
  }
  @media ${p => p.theme.media.tablet} {
    height: 44px;
    margin: 0;
    margin-left: 10px;
  }
  @media ${p => p.theme.media.desktop} {
    height: 44px;
    margin: 0 10px;
  }
`;

export const TextBtn = styled.span`
  margin-left: 10px;
`;
