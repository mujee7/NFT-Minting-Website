import { useState,useRef } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/icon/mint-img.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { totalMintCount, mint } from '../../../utils/web3mint';
import { useEffect } from "react";
import { isMetaMaskInstalled } from '../../../config';
const MintNowModal = () => {
  const ref = useRef()
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const { mintModalHandle } = useModal();
  const {walletModalHandle, visibility,
    metamaskModalHandle, Count,
     setCount,setNFT,  setNFTID,  
     NFT,  NFTID,account,contractAddress,
     setContractAddress,WEB3,setWEB3,Contract, setContract, NextMint,setNextMint} =useModal()
  let totalItems = 9999;
  let price = 0.03;

  const increaseCount = () => {
    
  }

  const dcreaseCount = () => {
    
  }

  const onChnageCount = (val) => {
    
  }

  // const transactionParameters = {
  //   to: contractAddress, // Required except during contract publications.
  //   from: account, // must match user's active address.
  //   data: Contract.methods._safeMint(account._address,Count).encodeABI(),
  // };
  const mintNow = async () => {
    console.log(account)
    console.log(Count)
   console.log(contractAddress)

  try {
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: account[0], // must match user's active address.
      data: Contract.methods._safeMint(account[0],Count).encodeABI(),
    };
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    if(txHash){
      setNextMint("just call it again")

    }
    

    
  }catch
{
  console.log("Eror in sending transactions")
}
  
  }
  useEffect(() => {
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      setRemaining(totalItems - totaltMintedItems);
    }

    calculateRemainingItems();
  },[totalItems]);

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if ( visibility&& ref.current && !ref.current.contains(e.target)) {
        mintModalHandle()
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [visibility])
  return (
    <>
      <MintModalStyleWrapper className="modal_overlay" >
        <div className="mint_modal_box" style={{marginTop:"60px"}}>
          <div className="mint_modal_content" ref={ref}>
            <div className="modal_header">
              <h2>{NFT.name}</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={NFT.image} alt="bithu nft mint" />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Description</h5>
                    <br></br>
                    <h5>
                    <span>{NFT.description}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price} ETH</h5>
                  </li>
                  <li>
                    <h5 style={{color:"red",margin:"auto"}}>*One quantity per wallet</h5>
                    
                   
                  </li>
                </ul>
              </div>
              { message && <p>{message}</p>}
              <div className="modal_mint_btn">
              {account?<Button lg variant="mint" onClick={() => mintNow() }>
                  Mint Now
                </Button>:<Button lg variant="" onClick={() => {handleWalletConnect()} }>
                  Connect Your Wallet
                </Button>}
                
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
