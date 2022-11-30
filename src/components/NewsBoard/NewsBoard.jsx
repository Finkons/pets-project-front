import PropTypes from "prop-types";
import NewsCard from "components/NewsCard";
import { NewBoard } from "./NewsBoard.styled";

export const NewsBoard = ({ events }) => {
  return (
    <NewBoard>
      {events.map(({ lang, _id, title, description, date, url }) => (
        <NewsCard key={_id} title={title} description={description} date={date} url={url} />
      ))}
    </NewBoard>
  );
};

NewsBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      lang: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default NewsBoard;
