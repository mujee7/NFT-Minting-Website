import { useModal } from "../../../utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import MetamaskModalStyleWrapper from "./MetamaskModal.style.js";
import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";

const MetamaskModal = () => {
  const { handleMetamaskModal } = useModal();

  return (
    <>
      <MetamaskModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>Please download & install metamask!</p>
              <button onClick={() => handleMetamaskModal()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="https://metamask.io/download/" target="_blank" rel="noreferrer">
                  <img src={metamaskIcon} alt="Meta-mask" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <a href="# ">Terms of Service</a>
                <a href="# ">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </MetamaskModalStyleWrapper>
    </>
  );
};

export default MetamaskModal;
