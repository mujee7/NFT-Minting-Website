import RoadMapStyleWrapper from "./RoadMap.style";
import RoadMapItem from "./roadMapItem/RoadMapItem";
import roadmapData from "../../../../assets/data/roadMap/roadmapV6";

const RoadMap = () => {
  const { data } = roadmapData;

  return (
    <RoadMapStyleWrapper>
      <div className="container">
        {data?.map((roadmaps, i) => (
          <div key={i} className="row roadmap_items_row">
            <h2 className="widget_title">{roadmaps.widgetTitle}</h2>
            {roadmaps.items?.map((project, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <RoadMapItem {...project} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
