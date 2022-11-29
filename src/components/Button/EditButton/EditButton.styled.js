import styled from "@emotion/styled";
import Icon from "../icons";

export const EditBtn = styled.button`
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: 50%;

  background: #fdf7f2;
  cursor: pointer;
  color: rgba(17, 17, 17, 0.6);

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media ${p => p.theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 32px;
    height: 32px;
  }
`;

export const EditIcon = styled(Icon.Edit)`
  width: 9.5px;
  height: 9.5px;

  @media ${p => p.theme.media.tablet} {
    width: 15.18px;
    height: 15.19px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 15.18px;
    height: 15.19px;
  }
`;
