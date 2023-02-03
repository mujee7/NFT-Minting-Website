import { useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet ,FaLinkedinIn,FaUserAstronaut} from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "../../../../common/button";
import logo from "../../../../assets/images/logo.png";
import openseaIcon from "../../../../assets/images/icon/opensea.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { isMetaMaskInstalled } from '../../../../config';
import MobileMenuStyleWrapper from "./MobileMenu.style";
import { HashLink } from "react-router-hash-link";
import { Link,useNavigate } from "react-router-dom";
import mediumIcon from "../../../../assets/images/icon/med.svg";
const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle, metamaskModalHandle, account, disconnectWalletFromApp } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);
  let nav=useNavigate()
  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="bithu_logo" src={logo} alt="bithu logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li className="mobile_menu_hide">
            <HashLink to="/#"><a >Home</a></HashLink>
            </li>
            <li className="mobile_menu_hide">
            <HashLink to="/#about"> <a >About</a></HashLink>
            </li>
            <li className="mobile_menu_hide">
            <HashLink to="#connect"><a  >contact</a></HashLink>
            </li>
            <li className="mobile_menu_hide">
            <Link to="/collections"><a >Collections</a></Link>
            </li>
            <li className="mobile_menu_hide">
            <Link to="/mint-1"><a >Mint</a></Link>
            </li>
            {/* <li className="submenu mobile_submenu" onClick={handleSubmenu}>
              <a href="# ">Pages +</a>
              <ul
                className={`sub_menu_list mobile_sub_menu_list ${
                  isSubmenu === true && "submenu_hovered"
                }`}
              >
                <li className="mobile_menu_hide">
                  <a href="/">Home One</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/home-two">Home Two</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/home-three">Home Three</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/blogs">Latest Blog</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/post">Blog Details</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          
          <a href="https://twitter.com/mujeeee7" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-mujtaba-rehman-851b321a7/" target="_blank">
          <FaLinkedinIn />
          </a>
          <a href="# ">
            <img src={mediumIcon} alt="bithu social icon" />
          </a>
        </div>
        { account ?
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="connect_btn">
              { substr(account.toString(), 15) }
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
            
              <Dropdown.Item onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          :
          <Button
            sm
            variant="hovered"
            className="connect_btn"
            onClick={() => handleWalletConnect()}
          >
            <FaWallet />
            Connect
          </Button>

          }{account?<Button
                sm
                variant="mint"
                className="connect_btn"
                onClick={() => nav("/Account")}
              >
                <FaUserAstronaut />
                Account
              </Button>:<></>}
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
