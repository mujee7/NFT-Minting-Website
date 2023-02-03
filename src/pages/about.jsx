import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader from "../common/pageHeader/v2";
import About from "../components/section/about/v6";
import HowToMint from "../components/section/howToMint/v3";
import Counter from "../components/section/counter/v2";
import Team from "../components/section/team/v6";
import CTA from "../components/section/cta/v2";
import Footer from "../components/section/footer/v3"; 
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
const AboutPage = () => {
  const { walletModalvisibility, metamaskModal} =
    useModal();
  return (
    <>
      <Layout>
        <GlobalStyles /> 
        {metamaskModal && <MetamaskModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader />
        <About />
        <HowToMint />
        <Counter />
        <Team />
        <CTA />
        <Footer />
      </Layout>
    </>
  );
};

export default AboutPage;
