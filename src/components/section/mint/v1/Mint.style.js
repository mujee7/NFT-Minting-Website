import styled from "styled-components";
import BgShape from "../../../../assets/images/bg/v5-baner6.jpg";

const MintStyleWrapper = styled.section`
  background: url(${BgShape}) no-repeat;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-top: 160px;

  .mint_left {
    padding-right: 40px;
    .slick__slider__item {
      .mint_thumb {
        max-width: 370px;
        width: 100%;
        margin-left: auto;
        background: rgba(255, 255, 255, 0.1);
        padding: 60px 55px;
        text-align: center;
        img {
          margin-left: auto;
        }
      }
    }
  }

  .mint_right {
    max-width: 370px;
    margin-right: auto;
    padding-left: 40px;

    p {
      margin-top: 23px;
      a {
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
      }
    }
  }

  .mint_count_list {
    margin: 0;
    padding: 0;
    margin-bottom: 30px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: #ffffff;
      }
    }
  }

  .mint_quantity_sect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 106px;
    width: 100%;
    height: 100%;

    button {
      border: none;
      outline: none;
      background: transparent;
      padding: 0px;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }

    input {
      max-width: 58px;
      width: 100%;
      border: none;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 0px 19px;
      outline: none;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  .bithu-btn {
    width: 100% !important;
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .mint_left {
      .slick__slider__item {
        .mint_thumb {
          max-width: 300px;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .mint_right p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 991px) {
    .mint_right {
      padding: 0;
      margin: 0 auto;
    }

    .mint_left {
      padding: 0;
      margin-bottom: 20px;
      .slick__slider__item {
        .mint_thumb {
          margin: 0 auto;
          img {
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding-bottom: 140px;
  }
`;

export default MintStyleWrapper;
