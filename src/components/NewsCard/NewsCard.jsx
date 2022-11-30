import PropTypes from "prop-types";
import { News, DecorLine, InfoContainer, Title, Text, SpecialContainer, Date, LinkNews } from "./NewsCard.styled";

export const NewsCard = ({ title, description, date, url }) => {
  return (
    <News>
      <DecorLine></DecorLine>
      <InfoContainer>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <SpecialContainer>
          {{ date } ? (
            <Date> {date} </Date>
          ) : (
            <Date>
              <span> No date </span>
            </Date>
          )}
          <LinkNews href={url} target="_blank">
            Read more
          </LinkNews>
        </SpecialContainer>
      </InfoContainer>
    </News>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsCard;
