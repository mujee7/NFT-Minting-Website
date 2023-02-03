import styled from "styled-components";
import BgShape from "../../../../assets/images/bg/v5-baner3.jpg";

const RoadMapStyleWrapper = styled.section`
  background: url(${BgShape}) no-repeat;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  /* .section_title {
    h3 {
      font-size: 30px;
    }
  } */

  /** roadmap items */

  .road_map_slider {
    position: relative;
    margin-top: 25px;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 50px;
      width: 100%;
      background: rgba(217, 217, 217, 0.08);
      content: "";
    }

    .road_map_title {
      color: #ffffff;
      font-size: 24px;
      line-height: 50px;
      margin: 0;
    }
    ul {
      z-index: 1;
      margin: 25px 0 0 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
        font-family: "Inter", "Bakbak One";
        column-gap: 12px;
      }

      li + li {
        margin-top: 15px;
      }
    }

    .slick-slider {
      position: relative;

      .slick-arrow {
        position: absolute;
        left: auto !important;
        right: 0 !important;
        top: 25px;
        height: 50px;
        width: 50px;
        color: #000;
        background: rgba(217, 217, 217, 0.15) !important;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        z-index: 1;

        &::before {
          background: transparent;
          z-index: 1;
          visibility: hidden;
          opacity: 0;
        }

        &.slick-prev {
          right: 52px !important;
        }
        &.slick-next {
        }

        svg {
          position: absolute;
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }
    .road_map_slider {
      .road_map_title {
        font-size: 16px;
      }

      ul {
        li {
          font-size: 12px;
        }
        li + li {
          margin-top: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .section_title {
      h3 {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .section_title {
      h3 {
        font-size: 34px;
      }
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding-top: 150px;
    padding-bottom: 450px;

    .section_title {
      h3 {
        font-size: 30px;
      }
    }
  }
`;

export default RoadMapStyleWrapper;
