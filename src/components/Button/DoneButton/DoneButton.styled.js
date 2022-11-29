import styled from "@emotion/styled";
import Icon from "../icons";

export const DoneIcon = styled(Icon.CheckMark)`
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
