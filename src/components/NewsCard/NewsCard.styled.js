import styled from "@emotion/styled";

export const News = styled.div`
  width: 280px;
  padding-bottom: 40px;
  margin-left: 32px;

  @media ${p => p.theme.media.tablet} {
    width: 336px;

    padding-bottom: 60px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 394px;
    margin-left: 34px;
  }
`;

export const DecorLine = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;

  @media ${p => p.theme.media.tablet} {
    width: 280px;
    height: 8px;
  }
`;

export const InfoContainer = styled.div`
  width: 280px;

  @media ${p => p.theme.media.tablet} {
    width: 336px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 395px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  overflow: hidden;
  height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  line-height: 1.37;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #111321;
  margin-bottom: 20px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    -webkit-line-clamp: 6;
  }

  @media ${p => p.theme.media.desktop} {
    -webkit-line-clamp: 5;
  }
`;

export const Date = styled.span`
  line-height: 1.37;
  font-weight: 400;
  color: rgba(17, 17, 17, 0.6);
`;

export const LinkNews = styled.a`
  text-align: right;
  text-decoration-line: underline;
  color: #f59256;
`;

export const SpecialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;