import SectionTitle from "../../../../common/sectionTitle";
import dividerShape from "../../../../assets/images/bg/roadmap_shape.svg";
import data from "../../../../assets/data/roadMap/roadMapV4";

import RoadMapStyleWrapper from "./RoadMap.style";

const RoadMap = () => {
  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container road_map_container">
        <SectionTitle
          isCenter={true}
          title="Roadmap"
          subtitle="Our Goals"
          className="text-center"
        />

        <div className="road_map_items">
          {data?.map((item, i) => (
            <div key={i} className="row">
              <div className="col-md-6">
                <div className="road_map_item road_map_item_left">
                  <img src={item.thumb} alt="thumb" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="road_map_item road_map_item_right">
                  <h4 className="road_map_title">{item.title}</h4>
                  <ul className="road_map_phase_list">
                    {item.features?.map((feature, idx) => (
                      <li key={idx}>
                        {feature.icon} {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          {/* devider shape  */}
          <div className="divider_shape">
            <img src={dividerShape} alt="shape" />
          </div>
        </div>
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
