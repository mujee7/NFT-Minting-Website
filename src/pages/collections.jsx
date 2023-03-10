import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader from "../common/pageHeader/v4/PageHeader";
import Collection from "../components/section/collection";
import { useEffect } from "react";
import Footer from "../components/section/footer/v1";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import WalletModal from "../common/modal/walletModal/WalletModal";

const CollectionsPage = () => {
  const { walletModalvisibility, metamaskModal,metamaskModalVisibility } = useModal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModalVisibility && <MetamaskModal />}
        {metamaskModal && <MetamaskModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader />
        <Collection />

        <Footer />
      </Layout>
    </>
  );
};

export default CollectionsPage;
