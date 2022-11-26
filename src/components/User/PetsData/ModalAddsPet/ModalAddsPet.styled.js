import styled from "@emotion/styled";
import { Field } from "formik";
import { CloseButton } from "components/Button";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextLabel = styled.label`
 display:inline-block;
margin-bottom: 8px;
 font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 24px;             
  }
  @media ${p => p.theme.media.mobile} {
    font-size: 18px;
line-height: 1.3;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 12px;
    font-size: 24px;
line-height: 1.4;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 12px;
    font-size: 24px;
line-height: 1.4;
  }
`;

export const Text = styled.p`
  @media ${p => p.theme.media.mobile} {
    margin-bottom: 12px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    letter-spacing: -0.01em;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
    margin-bottom: 34px;
    font-size: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 28px;
    margin-bottom: 34px;
    font-size: 20px;
  }
`;

export const Title = styled.h3`
  @media ${p => p.theme.media.mobile} {
    margin-bottom: 20px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 36px;
    font-weight: 600;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 36px;
    font-weight: 600;
  }
`;

export const TextWrap = styled.div`
  @media ${p => p.theme.media.mobile} {
    margin-bottom: 16px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 28px;
  }
`;

export const TextField = styled(Field)`
  display: block;
  padding-left: 14px;
  background: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  @media ${p => p.theme.media.mobile} {
    width: 240px;
    height: 40px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 48px;
    ::placeholder {
      font-size: 16px;
    }
  }
  @media ${p => p.theme.media.desktop} {
    width: 448px;
    height: 48px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;

export const ModalCloseButton = styled(CloseButton)`
  @media ${p => p.theme.media.mobile} {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  @media ${p => p.theme.media.tablet} {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const Container = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;

  @media ${p => p.theme.media.mobile} {
    width: 280px;
    max-height: ${props => (props.extended === true ? "855px" : "800px")};
    padding: 40px 20px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 608px;
    max-height: ${props => (props.extended === true ? "1044px" : "885px")};
    padding: 40px 80px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 608px;
    max-height: ${props => (props.extended === true ? "1044px" : "885px")};
    padding: 40px 80px;
  }
`;

export const FileButton = styled.button`
  display: flex;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
  background: ${p => p.theme.colors.background};
  img {
    margin: auto;
  }
  @media ${p => p.theme.media.mobile} {
    width: 208px;
    height: 208px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 182px;
    height: 182px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 182px;
    height: 182px;
  }
`;

export const FileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  img {
    border-radius: 20px;
  }
  p {
    text-align: center;
  }
`;

export const CommentsWrap = styled.div`
  margin-bottom: 40px;
`;
export const CommentsField = styled(Field)`
  display: block;
  background: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }
  @media ${p => p.theme.media.mobile} {
    width: 240px;
    height: 40px;
    padding-left: 14px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 113px;
    padding: 16px 186px 70px 18px;
    ::placeholder {
      font-size: 16px;
    }
  }
  @media ${p => p.theme.media.desktop} {
    width: 448px;
    height: 113px;
    padding: 16px 186px 70px 18px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
