import styled from "styled-components";
// import BgShape from "../../../../assets/images/bg/v5-baner5.jpg";

const FAQStyleWrapper = styled.section`
  width: 100%;
  padding: 140px 0 100px;

  // tabs

  .react-tabs {
    display: flex;
    column-gap: 30px;
  }

  .react-tabs__tab-list {
    display: flex;
    flex-direction: column;
    width: 40%;
    color: #ffffff;
    border: none;
    padding: 18px 30px;
    min-height: 500px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(10px);
  }

  .react-tabs__tab {
    width: 100%;
    font-family: "Bakbak One";
    font-size: 24px;
    line-height: 60px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;

    &.react-tabs__tab--selected {
      color: #00ffa3;
      outline: none;
      border: none;
      border-radius: 0;

      &:focus {
        border: none;
        outline: none;
      }

      &::after {
        display: none;
      }
    }
  }

  .react-tabs__tab-panel {
    width: 100%;
  }
  .accordion__item + .accordion__item {
    margin-top: 10px;
  }
  // tabs end

  .bithu_faq_questions {
    position: relative;

    .faq_questions {
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        margin-top: 10px;
      }
    }
  }
  .accordion__item {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      height: 75px;
      margin-bottom: 0px;
      padding: 0 29px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 24px;
      line-height: 34px;
      text-transform: none;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      max-width: 100%;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .accordion__header {
      h5 {
        height: 55px;
        font-size: 21px;
      }
    }

    .accordion__body {
      p {
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .accordion__header {
      h5 {
        font-size: 17px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .react-tabs__tab {
      font-size: 18px;
      line-height: 50px;
    }
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 160px 0;

    .react-tabs {
      flex-direction: column;
    }

    .react-tabs__tab-list {
      width: 100%;
      min-height: auto;
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: 667px) {
    .bithu_title_text {
      margin: 30px 0 57px 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__header {
      h5 {
        font-size: 18px;
      }
    }
  }
`;

export default FAQStyleWrapper;
