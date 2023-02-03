import styled, { keyframes } from "styled-components";
import sectionBgImage from "../../../../assets/images/bg/v4_baner_bg.png";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerV1Wrapper = styled.section`
  background: url(${sectionBgImage});
  min-height: 900px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 192px;

  .bithu_v1_baner_left {
    margin-top: 90px;
    max-width: 500px;
    width: 100%;
    min-height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .banner_title {
      z-index: 1;
      h2 {
        font-family: "Bakbak One";
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 80px;
        text-transform: uppercase;
        color: #ffffff;
        margin: 0;

        &.circle_cat_foot {
          display: flex;
          align-items: center;
          column-gap: 20px;
          span {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            img {
              position: absolute;
              height: auto;
              width: auto;

              &.foot_circle {
                animation: ${rotate} 20s linear infinite;
              }
            }
          }
        }
      }
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 43px;
      z-index: 1;

      .wishlist_btn {
        background: transparent;
      }
    }

    .coin_info {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      z-index: 1;
      h4 {
        line-height: 32px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
      }
    }
  }

  .bithu_v4_baner_right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 115px;
  }

  .banner_card {
    background: rgba(83, 83, 83, 0.5);
    backdrop-filter: blur(20px);
    height: 350px;
    width: 280px;
    padding: 20px;

    .banner_card_shapes {
      margin-top: 20px;
    }

    &.banner_card_angle {
      position: absolute;
      left: 30px;
      top: -70px;
      transform: rotate(-15deg);
    }
  }

  .bg_overlay {
    position: absolute;
    left: -25%;
    top: -55%;
    height: 100%;
    width: 100%;
  }

  .star_particles {
    position: absolute;
    height: 100%;
    width: 100%;

    span {
      position: absolute;
      &.star_1 {
        right: 120px;
        top: -60px;
      }
      &.star_2 {
        left: 0;
        top: 50%;
      }
      &.star_3 {
        left: 0;
        bottom: 0;
      }
    }
  }

  .banner_particles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1199px) {
    .bithu_v1_baner_left {
      .banner_title {
        h2 {
          font-size: 50px;
          line-height: 65px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 90px;
  }

  @media only screen and (max-width: 767px) {
    .bithu_v1_baner_left {
      .banner_title {
        h2 {
          font-size: 40px;
          line-height: 50px;
        }
      }

      .coin_info {
        margin-top: 20px;
      }
    }

    .bithu_v4_baner_right {
      justify-content: flex-end;
    }

    .banner_card {
      &.banner_card_angle {
        left: 60px;
        top: -50px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .bithu_v1_baner_left {
      .banner_title {
        h2 {
          font-size: 37px;
        }
      }
    }
  }
  @media only screen and (max-width: 414px) {
    .bithu_v1_baner_left {
      .banner_title {
        h2 {
          font-size: 35px;
        }
      }
    }
    .banner_card {
      &.banner_card_angle {
        left: 40px;
        top: -150px;
      }
    }

    .banner_buttons {
      flex-direction: column;
      row-gap: 15px;
    }
  }

  @media (max-width: 360px) {
    .bithu_v1_baner_left {
      .coin_info h4 {
        font-size: 13px;
      }
    }
  }
`;

export default BannerV1Wrapper;
