import { useModal } from "../../../../utils/ModalContext";
import CountdownTimer from "react-component-countdown-timer";
import Counter from "../../../../common/counter";
import Particle from "../../../../common/particle/v1";
import Button from "../../../../common/button";

import data from "../../../../assets/data/particle/bannerV2Particles";
import BannerStyleWrapper from "./Banner.style";
import { useEffect, useState } from "react";
import { totalMintCount } from '../../../../utils/web3mint';

const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();
  const settings = {
    count: 5432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "",
    hourTitle: "",
    minuteTitle: "",
    secondTitle: "", 
    id: "countdownwrap",
  };

  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      setRemaining(totaltMintedItems);
    }

    calculateRemainingItems();
  },[])

  return (
    <BannerStyleWrapper className="bithu_v2_baner_sect" id="home">
      <div className="container">
        <div className="bithu_v2_baner_content">
          <h2>
            {" "}
            <span className="banner-emot">🎉</span>Public Sale{" "}
            <span>Live !</span>
          </h2>
          <h3>
            <span className="count">
              <Counter end={remaining} duration={remaining} />
            </span>{" "}
            / 9999 Minted
          </h3>
          <div className="bithu_v2_timer">
            <h4>TIME LEFT</h4>
            <div className="timer timer_1">
              <CountdownTimer {...settings} />
            </div>
          </div>
          <div className="bithu_v2_baner_buttons text-center">
          {
            account ? 
            <Button lg variant="mint" onClick={() => mintModalHandle()}>
              {" "}
              Mint now
            </Button> :
            <Button lg variant="mint" onClick={() => connectWalletModalHanlde()}>
              {" "}
              Mint now
            </Button>
          }
          </div>

          <Particle className="v2_baner_stars" particles={data} />
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
