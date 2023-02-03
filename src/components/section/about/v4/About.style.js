import styled from "styled-components";
import AboutBG from "../../../../assets/images/bg/v4_about_us_bg.png";

const AboutStyleWrapper = styled.section`
  background: url(${AboutBG});
  padding: 125px 0 55px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 630px;
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  .about_section_title {
    margin-bottom: 30px;
    h2 {
      color: #ffffff;
    }
  }

  // left
  .about-left-item {
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    row-gap: 170px;
    color: #ffffff;

    .counter_item {
      width: 50%;
    }
  }

  /* right */
  .v1_about_us_right_text {
    margin-top: 46px;

    p {
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.8);
      padding-bottom: 20px;
    }
  }

  @media only screen and (max-width: 1199px) {
    .v1_about_us_right_text {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 991px) {
    .about-left-item {
      flex-direction: column;
      row-gap: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    background-position: left;
    padding: 80px 0;
    .about-left-item {
      display: flex;
      flex-direction: row;
      margin-bottom: 85px;
    }
  }

  @media only screen and (max-width: 575px) {
    .v1_about_us_right_text {
      margin-top: 10px;
      p {
        font-size: 13px;
        line-height: 24px;
        padding-bottom: 10px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .about-left-item {
      width: 100%;

      h3 {
        font-size: 22px;
      }
      h6 {
        font-size: 14px;
      }
    }
  }
`;

export default AboutStyleWrapper;
