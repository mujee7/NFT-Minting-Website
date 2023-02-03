import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import Mint1 from "../components/section/mint/v2/NFT-1";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import TransferModel from "../common/modal/mintNowModal/TransferModel"; 
import Footer from "../components/section/footer/v1";
const MintPageOne = () => {
  const { visibility, metamaskModal, walletModalvisibility } = useModal();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {visibility && <TransferModel />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        
        <Mint1 />
        <Footer />
      </Layout>
    </>
  );
};

export default MintPageOne;
