import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

import bgImgLeft from "../../../../../assets/images/bg/megamenu_left.png";
import bgImgRight from "../../../../../assets/images/bg/megamenu_right.png";

const slideAnimation = keyframes`${slideInLeft}`;

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #051117;
  z-index: 999;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    content: "";
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &::before {
    left: 0;
    background: url(${bgImgLeft});
  }
  &::after {
    right: 0;
    background: url(${bgImgRight});
  }

  animation: 0.7s ${slideAnimation} ease-in-out;

  .navigation_header {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 65px;
    padding-top: 32px;
    .menu_title {
      font-size: 40px;
      font-weight: 400;
      color: #ffffff;
      text-transform: uppercase;
      margin: 0;
    }

    // close icon
    .close_btn {
      position: absolute;
      right: 20px;
      button {
        height: 50px;
        width: 50px;
        background: transparent;
        z-index: 100;
        img {
          margin: 0 !important;
        }
        .hover-shape {
          display: none;
        }
      }
    }
  }

  .navigation_left {
    width: 100%;
    margin-left: auto;
    padding-right: 100px;
    position: relative;

    .popup_wrapper {
      position: relative;
      display: block;
      margin-top: 35px;
      bottom: 0;

      .popup_container {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(0px);
      }
    }
  }

  .menu_widgets {
    h3 {
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 20px;
      padding-bottom: 10px;
      width: 100%;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    }

    &.contact_address {
      h3 {
        display: flex;
        column-gap: 10px;
        align-items: center;
        border-bottom: none;
        padding-bottom: 0;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
      }

      p {
        margin: 0;
      }
    }
  }

  .pages_list,
  .home_pages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      display: block;
      width: 48%;
    }
  }

  .home_pages {
    gap: 10px;
  }

  .navigation_right {
    margin-right: auto;
    padding-left: 64px;
  }

  .navigation_left,
  .navigation_right {
    margin-top: 40px;
  }

  .pages_list {
    a {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 45px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .menu_widgets + .menu_widgets {
    margin-top: 25px;
  }

  /* social links */
  .social_links {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    a {
      position: relative;
      display: block;
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;

      svg,
      img {
        height: 20px;
        width: 20px;
        color: #ffffff;
      }

      .hover_shape {
        position: absolute;
        left: -10px;
        top: 0;
        height: 15px;
        width: 15px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
      }

      &:hover {
        .hover_shape {
          left: 5px;
          top: 0;
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .pages_list {
      a {
        line-height: 35px;
      }
    }
  }
  @media only screen and (max-width: 1366px) {
    .navigation_left {
      padding-left: 100px;
      padding-right: 50px;
    }
  }
  @media only screen and (max-width: 991px) {
    .navigation_left {
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 80px;
    overflow-y: scroll;

    &::before {
      display: none;
    }
    &::after {
      width: 100%;
    }
    .navigation_left,
    .navigation_right {
      padding: 0;
    }
  }
  @media only screen and (max-width: 414px) {
    .navigation_header {
      column-gap: 25px;
      .menu_title {
        font-size: 30px;
      }
    }

    .social_links {
      gap: 15px;

      a {
        height: 40px;
        width: 40px;
        img,
        svg {
          height: 14px;
          width: 14px;
        }
      }
    }
  }
`;

export default NavigationWrapper;
