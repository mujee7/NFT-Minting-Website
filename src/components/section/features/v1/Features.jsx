import SectionTitle from "../../../../common/sectionTitle";
import FeaturesCard from "./featuresCard/FeaturesCard";
import FeaturesStyleWrapper from "./Features.style";
import data from "../../../../assets/data/featuresDataV1"

const Features = () => {
  return (
    <FeaturesStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          title="TRIADER BENEFITS"
          subtitle="Features"
        />

        {/* about card */}
        <div className="row features_items_row">
          {data.map((item, i) => (
            <div key={i} className="col-md-4">
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </FeaturesStyleWrapper>
  );
};

export default Features;
