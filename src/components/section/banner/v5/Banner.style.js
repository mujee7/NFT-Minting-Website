import styled, { keyframes } from "styled-components";
import sectionBgImage from "../../../../assets/images/bg/v5-baner1.jpg";

const particle1 = keyframes`
0%,
        100% {
            top: 130px;
        }

        50% {
            top: 170px;
    }
`;
const particle2 = keyframes`
0%,
        100% {
            top: 50px;
        }

        50% {
            top: 75px;
    }
`;

const Bannerv5Wrapper = styled.section`
  background: url(${sectionBgImage});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 125px;

  .banner_row {
    align-items: center;
  }

  .bithu_v5_baner_left {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 60px;
      line-height: 1.35;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 32px;

      img {
        display: inline-block !important;
      }
    }

    h3 {
      font-size: 40px;
      line-height: 1.35;
      color: #ffffff;
      margin-bottom: 0;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 55px;

      button {
        width: 170px;
        height: 55px;
      }
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      span {
        font-family: "Bakbak One";
        text-transform: uppercase;
        font-size: 18px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  .bithu_v5_baner_right {
    .slick__slider__item {
      margin: 0 auto;
      img {
        margin: auto;
      }
    }
  }

  // coin slider

  .coin_info_slider {
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;

    img {
      filter: brightness(0) invert(1);
    }
  }

  // particles
  .particle_star {
    position: absolute;

    &.particle_1 {
      left: 140px;
      top: 150px;
      animation: ${particle1} 5s infinite;
    }
    &.particle_2 {
      right: 280px;
      top: 70px;
      animation: ${particle2} 5s infinite;
    }
    &.particle_3 {
      right: 75px;
      bottom: 250px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .bithu_v5_baner_left {
      padding-left: 100px;
      h2 {
        font-size: 40px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 24px;
      }

      .banner_buttons {
        margin-top: 25px;
      }

      .coin-info {
        margin-top: 25px;
        span {
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .bithu_v5_baner_left {
      padding-left: 150px;
      h2 {
        margin-bottom: 18px;
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    .banner_row {
      align-items: flex-start;
    }
    .bithu_v5_baner_left {
      padding-left: 70px;
    }
    .particle_star {
      display: none;
    }

    .banner_nft_thumb {
      width: 300px;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 120px 0 80px 0;

    .bithu_v5_baner_right {
      margin-bottom: 60px;
    }

    .bithu_v5_baner_left {
      padding-left: 0;
      max-width: 375px;
      margin: 0 auto;
      padding-bottom: 90px;

      h2 {
        font-size: 40px;
        margin-bottom: 15px;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .coin-info {
        margin-top: 25px;
        span {
          font-size: 14px;
          line-height: 25px;
        }
      }

      .banner_buttons {
        margin-top: 25px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .bithu_v5_baner_left {
      padding-bottom: 100px;

      h2 {
        font-size: 35px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 20px;
      }

      .banner_buttons {
        margin-top: 15px;
        button {
          width: 160px;
          height: 50px;
        }
      }
    }

    .coin_info_slider {
      bottom: 10px;
    }
  }
  @media only screen and (max-width: 414px) {
    .bithu_v5_baner_left {
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 18px;
      }

      .banner_buttons {
        flex-direction: column;
        row-gap: 15px;
        button {
          width: 160px;
          height: 50px;
        }
      }
    }

    .coin_info_slider {
      bottom: 60px;
    }
  }
`;

export default Bannerv5Wrapper;
