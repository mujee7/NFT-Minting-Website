import styled from "styled-components";

const StyleWrapper = styled.div`
  position: relative;
  .section_title {
    h2 {
      display: flex;
    }
  }

  .slick-dots {
    position: fixed !important;
    bottom: 0;
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    align-items: center;

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);

    li {
      min-height: 60px;
      width: calc(100% / 6);
      display: block;
      transition: background-color 0.6s ease;
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 16px;
      text-transform: uppercase;
      color: #ffffff;
      border-right: 1px solid rgba(255, 255, 255, 0.15);
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      margin: 0;
      transition: all 0.3s;

      span {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }
      &:hover,
      &.slick-active {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
      }
    }
  }

  .collapse_icon {
    position: fixed;
    right: 20px;
    bottom: 22px;
    color: #ffffff;
    span {
      height: 25px;
      width: 25px;
      cursor: pointer;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      display: none;
    }

    .collapse_icon_open {
      transform: rotate(-180deg);
    }
  }

  @media only screen and (max-width: 767px) {
    .slick-dots {
      .collapse_icon_close {
        transform: rotate(180deg);
      }

      flex-direction: column !important;
      li {
        width: 100%;
      }
    }

    .collapse_icon {
      span {
        display: block;
      }
    }

    .slick__slider {
      &.slider_collapse {
        .slick-dots {
          li {
            display: none;

            &.slick-active {
              display: block;
            }
          }
        }
      }
    }
  }
`;

export default StyleWrapper;
