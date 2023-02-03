import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";

import home1 from "../../../../../assets/images/nft/index1.png";
import home2 from "../../../../../assets/images/nft/index2.png";
import home3 from "../../../../../assets/images/nft/index3.png";
import home4 from "../../../../../assets/images/nft/index4.png";
import home5 from "../../../../../assets/images/nft/index-5.png";

import logo from "../../../../../assets/images/mint-logo.png";
import openseaIcon from "../../../../../assets/images/icon/opensea.svg";
import mediumIcon from "../../../../../assets/images/icon/med.svg";
import hoverShape from "../../../../../assets/images/icon/hov_shape_s.svg";
import mailIcon from "../../../../../assets/images/icon/mail_icon.svg";
import IconClose from "../../../../../assets/images/icon/mint-menu_x_icon..svg";

import NavigationWrapper from "./Navigation.style";
import Button from "../../../../../common/button";

const Navigation = ({ mobileMenuHandle }) => {

  return (
    <NavigationWrapper>
      <div className="container">
        <div className="navigation_header">
          <img src={logo} alt="logo" />
          <h2 className="menu_title">Menu</h2>

          <div className="close_btn">
            <Button sm variant="outline" onClick={() => mobileMenuHandle()}>
              <img src={IconClose} alt="icon" />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="navigation_left">
              <div className="menu_widgets">
                <h3>HOME PAGES</h3>
                <div className="home_pages">
                  <a href="/">
                    {" "}
                    <img src={home1} alt="icon" />{" "}
                  </a>
                  <a href="/home-two">
                    {" "}
                    <img src={home2} alt="icon" />{" "}
                  </a>
                  <a href="/home-three">
                    {" "}
                    <img src={home3} alt="icon" />{" "}
                  </a>
                  <a href="/home-four">
                    {" "}
                    <img src={home4} alt="icon" />{" "}
                  </a>
                  <a href="/home-five">
                    {" "}
                    <img src={home5} alt="icon" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="navigation_right">
              <div className="menu_widgets">
                <h3>SUB PAGES</h3>

                <div className="pages_list">
                  <a href="/mint-1"> Minting Page 1 </a>
                  <a href="/mint-2"> Minting Page 2 </a>
                  <a href="/coming-soon"> Coming Soon </a>
                  <a href="/post"> Blog Page </a>
                  <a href="/blogs"> Blog Details </a>
                  <a href="/about"> About Us </a>
                  <a href="/roadmap"> Roadmap </a>
                  <a href="/collections"> Collections </a>
                  <a href="/faq"> FAQs </a>
                  <a href="contact"> Contact Us </a>
                </div>
              </div>
              <div className="menu_widgets">
                <h3>JOIN WITH US</h3>

                <div className="social_links">
                  <a href="# ">
                    <img src={openseaIcon} alt="icon" />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaLinkedinIn />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaInstagram />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaTelegramPlane />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaFacebook />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <img src={mediumIcon} alt="icon" />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="menu_widgets contact_address">
                <h3>
                  {" "}
                  <img src={mailIcon} alt="icon" /> MAIL US
                </h3>
                <p>Info: ask@domain.com</p>
                <p>Support: wearehere@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
