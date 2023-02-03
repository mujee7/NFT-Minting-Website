import { useState } from "react";
import { ModalContext } from "./ModalContext";

import {
  connectWallet,
  connectWalletLocaly,
  isWalletConnected,
  disconnectWallet,
  CreateContract,
  ContractAddress,
  connectAccount
} from "../config";
  
const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [NextMint,setNextMint]=useState()
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModalVisibility, setMetamaskModalVisibility] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [account, setAccount] = useState("");
  const [NFT,setNFT]=useState();
  const [NFTID,setNFTID]=useState();
  const [contractAddress,setContractAddress]=useState();
  const [WEB3,setWEB3]=useState()
  const [Contract, setContract]=useState()
  const [Basic, setBasic]=useState()
  const [Count,setCount]=useState()
  
  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };
  
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const metamaskModalHandle = () => {
    setMetamaskModalVisibility(!metamaskModalVisibility);
  };

  const connectWalletModalHanlde = () => {
    if (!isWalletConnected()) {
      setConnectWalletModal(!connectWalletModal);
    }
  };

  const connectWalletHandle = async () => {
    const accounts = await connectWallet();
    setAccount(accounts);
    if (!isWalletConnected()) {
      connectWalletLocaly();
    }
    setModalvisibility(!walletModalvisibility);
  };

  const isWalletAlreadyConnected = async () => {
    if (isWalletConnected()) {
      const accounts = await connectAccount();
      setAccount(accounts);
    }else {
      const accounts = await connectWallet();
      setAccount(accounts);

    }
  };

  const disconnectWalletFromApp = () => {
    disconnectWallet();
    setAccount("");
  };
const CreateContractInstance=async()=>{
  setContract(CreateContract())
  setContractAddress(ContractAddress)
  setBasic(true)

}
 

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModalVisibility,
        metamaskModalHandle,
        account,
        connectWalletHandle,
        isWalletAlreadyConnected,
        disconnectWalletFromApp,
        connectWalletModalHanlde,
        connectWalletModal,
        setNFT,
        setNFTID,
        NFT,
        NFTID,
        contractAddress,
        setContractAddress,
        WEB3,
        setWEB3,
        Contract, 
        setContract,
        CreateContractInstance,
        Basic, 
        setBasic,
        Count,
        setCount,
        NextMint,
        setNextMint
        

       


      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
