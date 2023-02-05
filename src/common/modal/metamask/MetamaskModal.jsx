import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import MetamaskModalStyle from "./Metamaskmodal.style";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";
import { useEffect } from "react";

const MetamaskModal = () => {
  const { metamaskModalHandle } = useModal();

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      console.log("mobile device");
      document.getElementById("mobile").innerHTML =
        "Open the website in Metamask app ";
    } else {
      // false for not mobile device
      console.log("not mobile device");
    }
  }, []);
  return (
    <>
      <MetamaskModalStyle className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>METAMASK</h2>
              <button onClick={() => metamaskModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={metamaskIcon} alt="Meta-mask" />
                  <b id="mobile">Please install metamask extension!</b>
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

export default MetamaskModal;
