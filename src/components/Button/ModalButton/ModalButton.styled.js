import styled from "@emotion/styled";

export const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 240px;
  height: 40px;
  padding: 9px 41px;
  background: #ffffff;
  border: ${props => (props.authorized ? "2px solid #f59256" : "2px solid rgba(17, 17, 17, 0.1)")};
  border-radius: 40px;
  cursor: pointer;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${props => (props.authorized ? "black" : "rgba(17, 17, 17, 0.1)")};
  fill: ${props => (props.authorized ? "#f59256" : "rgba(17, 17, 17, 0.1)")};
  stroke: ${props => (props.authorized ? "#f59256" : "rgba(17, 17, 17, 0.1)")};

  @media screen and (max-width: 479px) {
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media ${props => props.theme.media.tabletDesktop} {
    width: 180px;
    height: 44px;
  }

  ${props =>
    props.primary &&
    `
    background-color: #f59256;
    color: white;
    border: 2px solid #f59256;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    `}

  &:hover,
  &:focus {
    color: ${props => (props.authorized ? "#ff6101" : "rgba(17, 17, 17, 0.1)")};
    border: ${props => (props.authorized ? "2px solid #ff6101" : "2px solid rgba(17, 17, 17, 0.1)")};
    ${props =>
      props.primary &&
      `
    background-color: #ff6101;
    color: white;
    border: 2px solid #ff6101;
    `}
  }
`;
