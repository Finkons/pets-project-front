import PropTypes from "prop-types";
import { News, Decor, InfoContainer, Title, Text, SpecialContainer, Date, LinkNews } from "./NewsCard.styled";

export const NewsCard = ({ name, text, date }) => {
    return (
      <News>
        <Decor></Decor>
        <InfoContainer>
          <Title>
            {name}
          </Title>
          <Text>
            <p> {text}</p>
          </Text>
          <SpecialContainer>
            <Date>
              <span>{date}</span>
            </Date>
            <LinkNews href="https://www.ukrinform.ua/tag-tvarini" target="_blank">
              Read more
            </LinkNews>
          </SpecialContainer>
        </InfoContainer>
      </News>
    );
}



NewsCard.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default NewsCard;
