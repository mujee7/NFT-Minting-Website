import { Slider, SliderItem } from "../../../common/slider/Slider";
import ConinInfoSliderWrapper from "./CoinInfoSlider.style";
import data from "../../../assets/data/coinSlider";
const CoinInfoSlider = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ConinInfoSliderWrapper className="coin_info_slider">
      <Slider {...sliderSettings}>
        {data?.map((item, idx) => (
          <SliderItem key={idx}>
            <div className="slide_item">
              <img src={item.icon} alt="icon" />
              {item.text}
            </div>
          </SliderItem>
        ))}
      </Slider>
    </ConinInfoSliderWrapper>
  );
};

export default CoinInfoSlider;
