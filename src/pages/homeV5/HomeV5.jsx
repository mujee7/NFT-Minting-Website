import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Slider, SliderItem } from "../../common/slider/Slider";
import { useModal } from "../../utils/ModalContext";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Layout from "../../common/layout";
import Header from "../../components/section/header/v2";
import Banner from "../../components/section/banner/v5";
import About from "../../components/section/about/v5";
import RoadMap from "../../components/section/roadMap/v5";
import FAQ from "../../components/section/faq/v5";
import Team from "../../components/section/team/v5";
import Mint from "../../components/section/mint/v1";
import MintNowModal from "../../common/modal/mintNowModal";
import WalletModal from "../../common/modal/walletModal/WalletModal";
import MetamaskModal from "../../common/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "../../common/modal/metamask/ConnectWallet";
import StyleWrapper from "./StyleWrapper";

const HomeV5 = () => {
  const [isCollapse, setCollapse] = useState(true);
  const { visibility,
    walletModalvisibility, 
    metamaskModalVisibility, 
    connectWalletModal, } = useModal();
  const menuData = [
    "01. Home",
    "02. About",
    "03. Roadmap",
    "04. Team",
    "05. FAQ",
    "06. Mint",
  ];

  const settings = {
    swipe: false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <span>{menuData[i]}</span>,
  };

  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  useEffect(() => {
    const listItems = document.querySelectorAll(".slick-dots li");
    for (let i = 0; i <= listItems.length - 1; i++) {
      listItems[i].addEventListener("click", (e) => { 
        setCollapse(!isCollapse);
      });
    }
  }, [isCollapse]);

  return (
    <>
      <Layout>
        <GlobalStyles />
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        {metamaskModalVisibility && <MetamaskModal/> }
        {connectWalletModal && <ConnectWallet/> }
        <Header />
        <StyleWrapper>
          <Slider
            {...settings}
            className={`${isCollapse ? "slider_collapse" : ""}`}
          >
            <SliderItem>
              <Banner />
            </SliderItem>
            <SliderItem>
              <About />
            </SliderItem>
            <SliderItem>
              <RoadMap />
            </SliderItem>
            <SliderItem>
              <Team />
            </SliderItem>
            <SliderItem>
              <FAQ />
            </SliderItem>
            <SliderItem>
              <Mint />
            </SliderItem>
          </Slider>

          <div className="collapse_icon">
            <span onClick={() => handleCollapse()}>
              {isCollapse ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </div>
        </StyleWrapper>
      </Layout>
    </>
  );
};

export default HomeV5;
