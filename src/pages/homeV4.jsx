import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import Banner from "../components/section/banner/v4";
import CoinInfoSlider from "../components/section/coinInfoSlider";
import About from "../components/section/about/v4";
import Features from "../components/section/features/v1";
import Portfolio from "../components/section/portfolio";
import RoadMap from "../components/section/roadMap/v4";
import Team from "../components/section/team/v4";
import FAQ from "../components/section/faq/v4";
import Footer from "../components/section/footer/v4"; 
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";

const HomeV4 = () => {
  const {
    visibility,
    walletModalvisibility, 
    metamaskModalVisibility, 
    connectWalletModal,  
  } = useModal();
  return (
    <>
      <Layout>
        <GlobalStyles /> 
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        {metamaskModalVisibility && <MetamaskModal/> }
        {connectWalletModal && <ConnectWallet/> }
        <Header />
        <Banner />
        <CoinInfoSlider />
        <About />
        <Features />
        <Portfolio />
        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
};

export default HomeV4;
