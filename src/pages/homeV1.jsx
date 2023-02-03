import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";

import CharacterSlider from "../components/section/characterSlider/v1";
import HowToMint from "../components/section/howToMint/v1";
import About from "../components/section/about/v1";
import Footer from "../components/section/footer/v1";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import { useEffect } from "react";



const HomeV1 = () => {
  const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal ,contractAddress,setContractAddress,WEB3,setWEB3,Contract, setContract,CreateContractInstance} = useModal();
 
  const something =async ()=>{
    await CreateContractInstance();
    
    
  }

  
  useEffect(() => {
    something()
    
  },[]);

  return (

    
    <Layout>
    
       <GlobalStyles />  
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
      <Header />
      <Banner />
      
      <CharacterSlider />
      <HowToMint />
      <About/>
      
      <Footer />
    </Layout>
  );
};

export default HomeV1;
