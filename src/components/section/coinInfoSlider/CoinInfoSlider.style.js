import styled from "styled-components";

const ConinInfoSliderWrapper = styled.section`
  background: #ffe600;
  padding: 20px 0;
  font-family: "Bakbak One";
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #111111;

  .slide_item {
    display: flex;
    align-items: center;
    column-gap: 20px;

    img {
      display: inline-block !important;
    }
  }
`;

export default ConinInfoSliderWrapper;
