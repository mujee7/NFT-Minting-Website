import styled from "styled-components";
import breadcumdBg from "../../../assets/images/bg/breadcumb-bg.jpg";
const PageHeaderStyleWrapper = styled.div`
  background: url(${breadcumdBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  margin-top: 90px;

  .breadcrumb_area {
    font-family: "Bakbak One";

    .breadcrumb_menu {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #00ffa3;
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        &:hover {
          color: #ffffff;
        }
      }
      span {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 10px;
      }
      img {
        margin-left: 15px;
      }
    }

    .breadcrumb_title {
      color: white;
      margin: 15px 0 0;
    }
  }

  .roadmap_phase {
    font-size: 48px;
    color: #ffffff;
    margin: 0;
    text-align: right;
  }

  @media only screen and (max-width: 767px) {
    padding: 80px 0;

    .roadmap_phase {
      margin-top: 40px;
      text-align: left;
    }
  }
`;

export default PageHeaderStyleWrapper;
