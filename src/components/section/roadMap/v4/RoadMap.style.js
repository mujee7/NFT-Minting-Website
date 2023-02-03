import styled from "styled-components";
import BgShape from "../../../../assets/images/nft/v2_roadmap_bg_shape.png";
const RoadMapStyleWrapper = styled.section`
  padding-top: 132px;
  padding-bottom: 128px;
  position: relative;

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60%;
    width: 60%;
    background: url(${BgShape}) no-repeat center;
    background-size: contain;
    transform: translate(-50%, -50%);
    content: "";
  }

  /** roadmap items */
  .road_map_item_left {
    transform: rotate(15deg);
    padding-top: 65px;
  }
  .road_map_item_right {
    padding-left: 74px;
  }
  .road_map_title {
    color: #ffffff;
    margin-bottom: 28px;
  }

  .road_map_phase_list {
    z-index: 1;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      column-gap: 14px;
      color: rgba(255, 255, 255, 0.8);
      font-family: "Inter", "Bakbak One";
      line-height: 1.6;
    }

    li + li {
      margin-top: 15px;
    }
  }

  /* bg image  */
  .bithu_roadmap_mass_gard {
    position: absolute;
    bottom: -400px;
    text-align: center;
    width: 100%;
    height: auto;
  }

  .road_map_items {
    position: relative;
    margin-top: 52px;
    .row {
      &:nth-child(even) {
        flex-direction: row-reverse;

        .road_map_item_left {
          transform: rotate(-15deg);
          text-align: right;
        }

        .road_map_item_right {
          padding: 0;
        }
      }
    }
    .row + .row {
      margin-top: 100px;
    }
  }

  .divider_shape {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    z-index: 1;
    img {
      height: 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    &::before {
      width: 100%;
      height: 90%;
    }
  }

  @media only screen and (max-width: 768px) {
    .road_map_item_left {
      text-align: center !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .road_map_items {
      .row + .row {
        margin-top: 90px;
      }
    }

    .road_map_item_right {
      padding: 0;
    }

    .road_map_item_left {
      margin-bottom: 50px !important;
    }

    .divider_shape {
      display: none;
    }
  }

  @media only screen and (max-width: 320px) {
    .road_map_item_left {
      img {
        width: 70%;
      }
    }
  }
`;

export default RoadMapStyleWrapper;
