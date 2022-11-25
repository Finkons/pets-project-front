import NewsCard from "components/NewsCard";
// import PropTypes from "prop-types";
import { NewBoard } from "./NewsBoard.styled";

export const NewsBoard = ({ events }) => {
  return (
    <NewBoard>
      {events.map(({ _id, title, description, date, url }) => (
        <NewsCard key={_id} title={title} description={description} date={date} url={url} />
      ))}
    </NewBoard>
  );
};

// NewsBoard.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.exact({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ),
// };

export default NewsBoard;
