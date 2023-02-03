import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import catFootIcon from "../../../../assets/images/icon/cat_foot_print.svg";
import catFootIconBg from "../../../../assets/images/icon/cat_walk_round_shap.svg";
import imgFrameShape from "../../../../assets/images/nft/nft-img-shape.png";

import catThumb1 from "../../../../assets/images/nft/cat1.png";
import catThumb2 from "../../../../assets/images/nft/cat2.png";
import catThumb3 from "../../../../assets/images/nft/cat3.png";
import catThumb4 from "../../../../assets/images/nft/cat4.png";
import catThumb5 from "../../../../assets/images/nft/cat5.png";
import catThumb6 from "../../../../assets/images/nft/cat6.png";
import catThumb7 from "../../../../assets/images/nft/cat7.png";
import catThumb8 from "../../../../assets/images/nft/home4_baner_img1.png";
import overlayImg from "../../../../assets/images/nft/v4_baner_mesh-grad.png"
import star1 from "../../../../assets/images/icon/v4_star1.svg"
import star2 from "../../../../assets/images/icon/v4_star2.svg"
import star3 from "../../../../assets/images/icon/v4_star3.svg"

import Particle from "./Particles"

const Banner = () => {
  const { mintModalHandle } = useModal();

  const slideImages = [catThumb1, catThumb2, catThumb3, catThumb4, catThumb5, catThumb6, catThumb7]
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <BannerV1Wrapper id="home">
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="bithu_v1_baner_left">
              <div className="banner_title">
                <h2 className="circle_cat_foot">The Cat
                  <span>
                    <img src={catFootIcon} alt="icon" />
                    <img src={catFootIconBg} className="foot_circle" alt="icon" />
                  </span>
                </h2>
                <h2>In Metaverse</h2>
              </div>

              <div className="coin_info">
                <h4>Stage 2, Public Sale</h4>
                <h4>MAY 14TH 2022: 12:00PM EST</h4>
              </div>

              <div className="banner_buttons">
                <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button>
                <Button lg variant="outline" className="wishlist_btn">
                  Wishlist now
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="bithu_v4_baner_right">
              <div className="banner_card banner_card_angle">
                <img src={catThumb8} className="banner_img" alt="thumb" />
                <div className="banner_card_shapes">
                  <img src={imgFrameShape} alt="shape" />
                </div>
              </div>
              <div className="banner_card">
                <Slider {...settings}>
                  {slideImages?.map((thumb, idx) => (
                    <SliderItem key={idx}>
                      <img src={thumb} alt="thumb" />
                    </SliderItem>
                  ))}
                </Slider>
                <div className="banner_card_shapes">
                  <img src={imgFrameShape} alt="shape" />
                </div>
              </div>

              {/* star particles */}
              <div className="star_particles">
                <span className="star_1">
                  <img src={star1} alt="icon" />
                </span>
                <span className="star_2">
                  <img src={star2} alt="icon" />
                </span>
                <span className="star_3">
                  <img src={star3} alt="icon" />
                </span>
              </div>
              {/* bg overlay */}
              <span className="bg_overlay">
                <img src={overlayImg} alt="thumb" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
