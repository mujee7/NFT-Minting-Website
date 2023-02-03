import styled from "styled-components";

const PortfolioStyleWrapper = styled.section`
  padding: 30px 0 0; 

  .slider_items + .slider_items {
    margin-top: 20px;
  }

  @media only screen and (max-width: 1280px) {
    .slider_items {
      .slick-list {
        margin: 0 -10px;
        .slick-slide {
          padding: 0 10px;
        }
      }
    }
  }
`;

export default PortfolioStyleWrapper;
