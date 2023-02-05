import { useModal } from "../../../../utils/ModalContext";

import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import { Link } from "react-router-dom";
// import characterThumb from "../../../../assets/images/nft/Character1.png";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/cpg/girl (4).png";


const Banner = () => {
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>CyberPunk Girl NFT collections</h2>
              <h3>
                <span className="count"></span>{" "}
              </h3>
              <div className="banner_buttons">
                <Link to="/mint-1">
                  <Button lg variant="mint">
                    {" "}
                    Mint now
                  </Button>
                </Link>
                <br></br>
                <a
                  href="https://faucet.polygon.technology/"
                  target="_blank"
                  style={{ backgroundColor: "#1D9BF0" }}
                >
                  <Button lg variant="outline">
                    GET FREE MATIC
                  </Button>
                </a>
              </div>
              <div className="coin-info">
                <span>Max 1 NFTs per wallet . Price 0.0004 MATIC </span>
                <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL Infinity</span>
                </span>
                <span>Presale : SOLDOUT</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  {/* <img src={characterThumb} alt="avater" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
