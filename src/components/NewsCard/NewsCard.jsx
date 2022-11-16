import PropTypes from "prop-types";
import { News, Title, Text, Date, LinkNews } from "./NewsCard.styled";

export const NewsCard = ({ name, text, date }) => {
    return (
      <News>
        <Title>
          <h1>{name}</h1>
        </Title>
        <Text>
          <p> {text}</p>
        </Text>
        <Date>
          <p>{date}</p>
        </Date>
        <LinkNews>
          <p>
            <a href="https://www.ukrinform.ua/tag-tvarini">Read more</a>
          </p>
        </LinkNews>
      </News>
    );
}

NewsCard.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default NewsCard;