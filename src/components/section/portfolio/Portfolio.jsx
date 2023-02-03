import { Slider, SliderItem } from "../../../common/slider/Slider";
import PortfolioStyleWrapper from "./Portfolio.style"
import data from "../../../assets/data/portfolioData"

const Portfolio = () => {
    const rightSlide = {
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const leftSlide = {
        ...rightSlide,
        rtl: true
    }

    return (
        <PortfolioStyleWrapper>
            <div className="slider_items slider_items_right">
                <Slider {...rightSlide}>
                    {data?.map((item, i) => (
                        <SliderItem key={i}>
                            <img src={item} alt="nft thumb" />
                        </SliderItem>
                    ))}
                </Slider>
            </div>
            <div className="slider_items slider_items_left">
                <Slider {...leftSlide}>
                    {data?.map((item, i) => (
                        <SliderItem key={i}>
                            <img src={item} alt="nft thumb" />
                        </SliderItem>
                    ))}
                </Slider>
            </div>
        </PortfolioStyleWrapper>
    )
}

export default Portfolio;