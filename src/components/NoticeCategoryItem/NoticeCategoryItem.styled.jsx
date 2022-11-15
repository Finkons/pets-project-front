import styled from "@emotion/styled";
import { LearnMoreButton } from "components/Button";
import { HeartButton } from "components/Button/HeartButton/HeartButton";

export const Container = styled.div`
  position: relative;
  width: 280px;
  padding-bottom: 32px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  background-color: #fff;
  @media ${p => p.theme.media.tablet} {
    width: 336px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 288px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CategoryLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  padding: 6px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0 20px 20px 0;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const InfoWrapper = styled.div`
  margin-bottom: 50px;
  padding: 20px 20px 0 20px;
`;

export const Title = styled.h3`
  width: 226px;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.heading};
`;

const Info = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Data = styled.span`
  width: 150px;
`;

export const InfoItem = ({ label, data }) => (
  <Info>
    {label}
    <Data>{data}</Data>
  </Info>
);

export const AddToFavorites = styled(HeartButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const LearnMore = styled(LearnMoreButton)`
  display: block;
  margin: 0 auto;
`;
