import styled from "styled-components";

const AboutStyleWrapper = styled.section`
  padding: 107px 0 0;

  .about_title {
    font-size: 48px;
    color: #ffffff;
    line-height: 67px;
    margin-bottom: 43px;
    text-transform: uppercase;
  }

  .about_left_content {
    padding-right: 20px;

    p {
      margin-bottom: 25px;
    }

    .bithu-btn {
      margin-top: 45px;
    }
  }

  .about_right_content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .nft_thumb {
    width: 48%;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1199px) {
    .about_left_content {
      p {
        font-size: 14px;
        line-height: 26px;
      }
    }
    .about_title {
      font-size: 38px;
      line-height: 53px;
      margin-bottom: 17px;
    }

    .about_right_content {
      .nft_thumb {
        width: 47%;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .about_left_content {
      p {
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 10px;
      }
    }
    .about_title {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 17px;
    }
  }

  @media only screen and (max-width: 767px) {
    .about_right_content {
      margin-top: 50px;
    }
  }
`;

export default AboutStyleWrapper;
