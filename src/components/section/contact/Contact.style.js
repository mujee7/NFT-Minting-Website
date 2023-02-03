import styled from "styled-components";

const ContactStyleWrapper = styled.section`
  padding: 85px 0 140px;

  .section_tag_line {
    h4 {
      color: #00ffa3;
      margin-bottom: 13px;
    }
    h2 {
      font-size: 48px;
      line-height: 67px;
      color: #ffffff;
      margin-bottom: 37px;
    }
  }

  .left_content {
    form {
      .form_box + .form_box {
        margin-top: 22px;
      }
    }
  }

  label {
    font-family: "Bakbak One";
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    line-height: 45px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  input,
  textarea {
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    outline: none;
    padding: 8px 21px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    width: 100%;
    box-sizing: border-box;
  }

  input {
    height: 60px;
  }

  textarea {
    height: 130px;
    resize: none;
  }

  .bithu-btn {
    margin-top: 35px;
  }

  .right_content {
    padding-top: 40px;
    padding-left: 110px;

    h4,
    h5 {
      color: #ffffff;
      text-transform: uppercase;
    }
    h5 {
      font-size: 18px;
      margin-bottom: 6px;
    }

    p {
      font-size: 16px;
      line-height: 40px;
      font-weight: 400;
      margin-bottom: 0;
    }

    .widget_title {
      margin-bottom: 25px;
    }

    .contact_address_info {
      display: flex;
      align-items: baseline;
      column-gap: 15px;
    }

    .contact_address_info + .contact_address_info {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 991px) {
    .section_tag_line {
      h4 {
        font-size: 22px;
      }
      h2 {
        font-size: 38px;
        line-height: 50px;
      }
    }

    .right_content {
      padding-left: 40px;

      p {
        font-size: 14px;
        line-height: 30px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .section_tag_line {
      h4 {
        font-size: 20px;
      }
      h2 {
        font-size: 34px;
        line-height: 45px;
      }
    }

    .right_content {
      padding-left: 0px;
    }
  }
`;

export default ContactStyleWrapper;
