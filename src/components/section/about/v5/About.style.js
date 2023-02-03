import styled from "styled-components";
import AboutBG from "../../../../assets/images/bg/v5-baner2.jpg";

const AboutStyleWrapper = styled.section`
  background: url(${AboutBG});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-bottom: 60px;

  .about_row {
    align-items: center;
  }

  /* left */
  .v5_about_us_left_sect {
    padding-right: 50px;
  }
  .v5_about_us_left_text {
    margin-top: 45px;

    p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 20px;
    }

    p + p {
      margin-bottom: 0;
    }
  }

  // right
  .about_right_item {
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-wrap: wrap;
    row-gap: 185px;
    padding-left: 50px;
    margin-top: 35px;

    .counter_item {
      width: 50%;
      h3 {
        font-size: 40px;
        line-height: 36px;
        text-transform: uppercase;
        margin-bottom: 0;
      }
      h6 {
        font-size: 18px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 0;
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1700px) {
    .v5_about_us_left_text {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }

    .about_right_item {
      row-gap: 130px;
    }
  }

  @media only screen and (max-width: 1366px) {
    .section_title {
      h3 {
        font-size: 30px;
      }
    }
    .v5_about_us_left_text {
      margin-top: 23px;

      p {
        font-size: 12px;
        line-height: 20px;
      }
    }

    .about_right_item {
      row-gap: 100px;
      .counter_item {
        h3 {
          font-size: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .section_title {
      h2 {
        margin-bottom: 10px;
      }

      h3 {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 150px;

    .v5_about_us_left_text,
    .about_right_item,
    .section_title {
      max-width: 400px;
      margin: 0 auto;
    }

    .v5_about_us_left_text {
      margin-top: 35px;
    }

    .about_right_item {
      margin-top: 70px;
      align-items: baseline;
      padding-left: 0;
    }
  }

  @media only screen and (max-width: 776px) {
    padding-top: 150px;

    .v5_about_us_left_sect {
      padding-right: 0;
    }

    .about_right_item {
      .counter_item {
        h3 {
          font-size: 27px;
        }
        h6 {
          font-size: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    padding-bottom: 156px;
  }
`;

export default AboutStyleWrapper;
