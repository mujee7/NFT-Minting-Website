import styled from "styled-components";

const HeaderStyleWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 40px;
  width: 100%;
  height: 110px;
  z-index: 11;
  display: flex;
  align-items: center;
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(27, 34, 38, 0.8);
    backdrop-filter: blur(15px);
    z-index: 997;
    margin-top: 0px;
    transition: all 0.2s;
  }

  .header_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bithu_menu_btns {
    display: flex;
    column-gap: 30px;

    .menu_btn {
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

    .connect_btn {
      height: 50px;
      min-width: 150px;
      border: none;
      margin-left: 20px;
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-family: "Bakbak One";
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
      svg {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    .bithu_menu_btns {
      column-gap: 25px;

      .menu_btn {
        height: 45px;
        width: 45px;
      }

      .connect_btn {
        width: 140px;
        height: 45px;
        font-size: 14px;
        svg {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 375px) {
    padding: 15px;
  }
`;

export default HeaderStyleWrapper;
