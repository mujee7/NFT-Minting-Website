import RoadMapItemStyleWrapper from "./RoadMapItem.style";

const RoadMapItem = ({
  projectTitle,
  projectStatus,
  projectStatusIcon,
  projectFeatures,
}) => {
  const classNames =
    projectStatus === "DONE"
      ? "project_done"
      : projectStatus === "PENDING"
      ? "project_pending"
      : "";

  return (
    <RoadMapItemStyleWrapper className={`roadmap_item ${classNames} `}>
      <div className="roadmap_header">
        <h3>{projectTitle}</h3>
        {projectStatusIcon}
      </div>
      <ul className="roadmap_features">
        {projectFeatures?.map((item, idx) => (
          <li key={idx}>
            {" "}
            {item.icon} {item.text}{" "}
          </li>
        ))}
      </ul>
    </RoadMapItemStyleWrapper>
  );
};

export default RoadMapItem;
