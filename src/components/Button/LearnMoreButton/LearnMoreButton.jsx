import { LearnMoreBtn } from "./LearnMoreButton.styled";

export const LearnMoreButton = ({ onClick, className }) => {
  return (
    <LearnMoreBtn onClick={onClick} className={className || ""}>
      Learn more
    </LearnMoreBtn>
  );
};
