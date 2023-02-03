import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import MetamaskModalStyle from "./Metamaskmodal.style";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";

const ConnectWallet = (props) => {
  const { connectWalletModalHanlde } = useModal();
  return (
    <>
      <MetamaskModalStyle className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <button onClick={() => connectWalletModalHanlde()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="# ">
                  <img src={metamaskIcon} alt="Meta-mask" />
                  Connect your wallet!
                </a>
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
      </MetamaskModalStyle>
    </>
  );
};

export default ConnectWallet;
