import SectionTitle from "../../../../common/sectionTitle";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import data from "../../../../assets/data/roadMap/roadMapV5";

import RoadMapStyleWrapper from "./RoadMap.style";

const RoadMap = () => {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <FiChevronRight />
      </button>
    );
  };
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <FiChevronLeft />
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container">
        <SectionTitle
          title="Roadmap"
          subtitle="Our Goals"
          className="section_title"
        />
      </div>

      <div className="road_map_slider">
        <div className="container">
          <Slider {...sliderSettings}>
            {data?.map((item, i) => (
              <SliderItem key={i}>
                <div className="road_map_slide_content">
                  <h3 className="road_map_title">{item.title}</h3>
                  <ul>
                    {item.features?.map((feature, idx) => (
                      <li key={idx}>
                        {" "}
                        {feature.icon} {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </SliderItem>
            ))}
          </Slider>
        </div>
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
