import styled from "styled-components";
import BgShape from "../../../../assets/images/bg/v5-baner4.jpg";

const TeamStyleWrapper = styled.section`
  background: url(${BgShape}) no-repeat;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-top: 150px;

  .section_title {
    margin-bottom: 45px;
  }

  .team_member_list {
    display: flex;
    justify-content: space-between;
    max-width: 510px;
  }

  .team_member_item {
    width: 170px;
    height: 170px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    &:nth-child(2) {
      margin-top: 170px;
    }
  }

  .member_avatar {
    width: 50%;
    margin: 0 auto;
    position: absolute;
    transition: all 0.3s;
  }

  .member_details {
    position: absolute;
    left: -50px;
    top: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    content: " ";
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    transition: all 0.3s;

    h6 {
      font-size: 15px;
      span {
        font-size: 12px;
        display: block;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        font-family: "Inter";
        margin-top: 13px;
      }
    }

    .social_profiles {
      display: flex;
      column-gap: 15px;
      a {
        font-size: 14px;
        color: #ffffff;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .team_member_item_bottom {
    margin: -90px auto 0 auto;
  }

  .team_member_item,
  .team_member_item_bottom {
    &:hover {
      .member_avatar {
        z-index: -1;
        filter: blur(10px);
      }
      .member_details {
        left: 0;
        visibility: visible;
        opacity: 1;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }

    .team_member_list {
      max-width: 390px;
      margin: auto;
    }

    .team_member_item {
      width: 130px;
      height: 130px;

      &:nth-child(2) {
        margin-top: 130px;
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
    padding-bottom: 150px;
    .section_title {
      h3 {
        font-size: 34px;
      }
    }
    .team_member_item_bottom {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 767px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }
    padding-bottom: 100px;
  }
`;

export default TeamStyleWrapper;
