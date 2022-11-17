import styled from "@emotion/styled";
import { Field } from "formik";

export const Container = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 885px;

  @media ${p => p.theme.media.mobile} {
    top: 158px;
    width: 280px;
    height: 885px;
    padding: 40px 20px;
    border-radius: 20px;
  }
  @media ${p => p.theme.media.tablet} {
    top: 264px;
    width: 608px;
    height: 885px;
    padding: 40px 80px;
    border-radius: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    top: 329px;
    width: 608px;
    height: 885px;
    padding: 40px 80px;
    border-radius: 40px;
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
    margin-bottom: 20px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 13px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 13px;
  }
`;

// export const CategoryLabel = styled.label`
//   display: inline-block;
//   margin-left: 15px;
//   margin-bottom: 15px;
//   padding: 10px 28px;
//   background-color: #ffffff;
//   border-radius: 40px;
//   border: 2px solid ${p => p.theme.colors.accent};
//   font-size: 20px;
//   font-family: ${p => p.theme.fonts.body};
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 1.3;
// `;

export const CategoryLabel = styled.label`
  display: inline-block;
  margin-left: 15px;
  margin-bottom: 15px;
  padding: 10px 28px;
  background-color: "#ffffff";
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.accent};
  font-size: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
`;

export const CategoryInput = styled(Field)`
  //   display: none;
  &:checked + CategoryLabel {
    background-color: tomato;
  }
`;

export const TextFild = styled(Field)`
  display: block;
  padding-left: 14px;
  background: #fdf7f2;
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
margin-bottom: 12px;
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
`;

export const CommentsFild = styled(Field)`
  display: block;
  padding-left: 14px;
  background: #fdf7f2;
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
  }
  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 113px;
    ::placeholder {
      font-size: 16px;
    }
  }
  @media ${p => p.theme.media.desktop} {
    width: 448px;
    height: 113px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
