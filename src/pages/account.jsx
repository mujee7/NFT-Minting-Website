import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader1 from "../common/pageHeader/v4/AccountHeader";
import Account from "../components/section/collection/Account";
import Footer from "../components/section/footer/v1";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import { useEffect } from "react";

const CollectionsPage = () => {
  const {
    walletModalvisibility,
    metamaskModal,
    account,
    isMetaMaskInstalled,
    metamaskModalHandle,
    walletModalHandle,
    metamaskModalVisibility
  } = useModal();
  const handleWalletConnect = async () => {
    if (!isMetaMaskInstalled()) {
      metamaskModalHandle();
    } else {
      walletModalHandle();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {metamaskModalVisibility && <MetamaskModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        {account ? (
          <>
            <PageHeader1 />
            <h1
              style={{ color: "white", marginTop: "20px", textAlign: "center" }}
            >
              Your NFTs
            </h1>
            <Account />
          </>
        ) : (
          <div style={{ marginTop: "20%" }}>
            <h1
              style={{ color: "white", marginTop: "20px", textAlign: "center" }}
            >
              Connect Your Wallet
            </h1>
            <div style={{ marginTop: "20%" }}></div>
          </div>
        )}

        <Footer />
      </Layout>
    </>
  );
};

export default CollectionsPage;
