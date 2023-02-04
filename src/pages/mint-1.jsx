import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Mint from "../components/section/mint/v2/Mint";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import Footer from "../components/section/footer/v1";
import { useEffect } from "react";
const MintPageOne = () => {
  const { visibility, metamaskModal, walletModalvisibility } = useModal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Mint />
        <Footer />
      </Layout>
    </>
  );
};

export default MintPageOne;
