import styled from "styled-components";

const RoadMapStyleWrapper = styled.section`
  padding: 80px 0 140px;

  .widget_title {
    color: #ffffff;
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 23px;
  }

  .roadmap_items_row + .roadmap_items_row {
    margin-top: 35px;
  }

  @media only screen and (max-width: 991px) {
    .roadmap_items_row {
      row-gap: 20px;
    }
  }
`;

export default RoadMapStyleWrapper;
