import styled from "styled-components";
import BgShape from "../../../../assets/images/bg/mint-2_bg.png";

const MintStyleWrapper = styled.section`
  background: url(${BgShape}) no-repeat;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: "";
    background: linear-gradient(180deg, rgba(4, 12, 18, 0.8) 0%, #040c12 100%);
    z-index: -1;
  }

  .mint_items_row {
    row-gap: 30px;
  }

  .mint_header {
    color: #ffffff;

    h4 {
      margin-bottom: 0;
      line-height: 1.35;
    }

    .mint_counter {
      margin-bottom: 5px;
      span {
        font-size: 1.5rem;
        line-height: 1.35;
        font-family: "Bakbak One";
      }
    }

    .sale_status {
      text-align: right;
      img {
        margin-left: 7px;
      }
    }
  }

  // timer
  .countBox {
    display: flex;
    column-gap: 20px;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;

    .countBoxItem {
      display: flex;
      color: #ffffff;
      align-items: baseline;
      flex-direction: row-reverse;
      position: relative;
      justify-content: center;

      &::before,
      &::after {
        position: absolute;
        right: -11px;
        height: 5px;
        width: 5px;
        background: #ffffff;
        content: "";
        opacity: 0.4;
        border-radius: 1px;
      }
      &::before {
        top: 62%;
      }
      &::after {
        top: 35%;
      }

      &:first-child {
        &::before,
        &::after {
          display: none;
        }
      }
    }

    .split {
      display: none;
    }

    .count,
    .label {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 50px;
      text-transform: uppercase;
      color: #ffffff;
      position: relative;
      line-height: 1.35;
    }
  }

  .mint_items {
    margin-top: 50px;

    .mint_item_card {
      background: rgba(36, 44, 52, 0.7);
      backdrop-filter: blur(10px);
      padding: 30px;
      position: relative;
      color: #ffffff;
      text-align: center;
      position: relative;
      overflow: hidden;

      .mint_offer_tag {
        position: absolute;
        left: -39px;
        top: 26px;
        padding: 0 40px;
        background: #48cbff;
        transform: rotate(-45deg);
        text-align: center;
        color: #000000;
        text-transform: uppercase;
      }
      .mint_thumb {
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      h4 {
        margin: 21px 0;
        text-transform: capitalize;
      }

      span {
        display: block;
        text-align: center;
        margin-bottom: 10px;
        line-height: 1.8;
      }

      .access_text {
        height: 30px;
        margin-bottom: 0;
      }

      .bithu-btn {
        margin-top: 20px;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .countBox {
      .count {
        font-size: 24px !important;
      }
      .label {
        font-size: 14px !important;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 137px 0 140px;
    .mint_header {
      .mint_counter {
        text-align: left !important;
      }

      .sale_status {
        text-align: left !important;
      }

      .mint_header_row {
        row-gap: 20px;
      }

      .counter_title {
        margin-bottom: 20px;
      }
    }
  }
`;

export default MintStyleWrapper;
