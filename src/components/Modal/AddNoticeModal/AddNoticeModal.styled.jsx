import styled from "@emotion/styled/macro";
import { Field } from "formik";
import { CloseButton } from "components/Button";

export const Container = styled.div`
  top: 20px;
  background-color: ${p => p.theme.colors.white};
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 50px;
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

export const CategoryWrap = styled.div`
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

export const CategoryLabel = styled.label`
  display: inline-block;
  margin-right: 15px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
  padding: 10px 28px;
  background-color: "#ffffff";
  font-weight: 500;
  font-size: 20px;
  border-radius: 40px;
  font-style: normal;
  line-height: 1.3;
  border: 2px solid ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};

  @media ${p => p.theme.media.mobile} {
    font-size: 14px;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
  }
`;

export const CategoryInput = styled(Field)`
  display: none;
  &:checked + ${CategoryLabel} {
    background-color: #f59256;
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

export const TextFild = styled(Field)`
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

export const BreedWrap = styled.div`
  margin-bottom: 40px;
`;

export const SexWrap = styled.div`
  margin-bottom: 40px;
  p {
    margin-bottom: 14px;
    font-family: 'Manrope';
font-style: normal;
font-weight: 500;
  }
  @media ${p => p.theme.media.mobile} {
    font-size: 18px;
line-height: 1.3;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 24px;
line-height: 1.4;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 24px;
line-height: 1.4;
  }
  }
`;

export const SexImage = styled.img`
  margin: 0;
`;

export const SexLabel = styled.label`
display: inline-block;
margin-right: 39px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
div {
  margin-bottom:23px;
}
  }
  @media ${p => p.theme.media.mobile} {
    font-size: 18px;
line-height: 1.3;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 20px;
line-height: 1.4;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 95px;
    font-size: 20px;
line-height: 1.4;
  }
`;

export const SexInput = styled(Field)`
  display: none;
  &:checked + ${SexLabel} {
    color: #f59256;
  }
`;

export const FileWrap = styled.div`
  display: flex;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    border-radius: 20px;
  }
  p {
    text-align: center;
  }
`;

export const FileButton = styled.button`
  display: flex;
  border-radius: 20px;
  border: none;
  background: ${p => p.theme.colors.background};
  img {
    margin: auto;
  }
  @media ${p => p.theme.media.mobile} {
    width: 116px;
    height: 116px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 140px;
    height: 140px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 140px;
    height: 140px;
  }
`;

export const CommentsWrap = styled.div`
  margin-bottom: 40px;
`;

export const CommentsFild = styled(Field)`
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
