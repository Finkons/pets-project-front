import NewsCard from "components/NewsCard";
import PropTypes from "prop-types";
import { NewBoard } from "./NewsBoard.styled";

export const NewsBoard = ({ events }) => {
  return (
    <NewBoard>
      {events.map(({ name, text, date }) => (
        <NewsCard key={name} name={name} text={text} date={date} />
      ))}
    </NewBoard>
  );
};

NewsBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    )
};

export default NewsBoard;