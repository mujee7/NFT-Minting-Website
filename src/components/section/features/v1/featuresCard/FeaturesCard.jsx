import FeaturesCardStyleWrapper from "./FeaturesCard.style";

const FeaturesCard = ({ title, icon, text }) => {
  return (
    <FeaturesCardStyleWrapper className="about_us_text_card">
      <h3>
        <img src={icon} alt="" />
        {title}
      </h3>
      <p>{text}</p>
    </FeaturesCardStyleWrapper>
  );
};

export default FeaturesCard;
