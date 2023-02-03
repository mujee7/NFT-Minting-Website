import styled from "styled-components";

const CollectionStyleWrapper = styled.section`
  padding: 100px 0 140px;

  .products_row {
    row-gap: 40px;
  }

  .price_filter {
    position: relative;

    select {
      appearance: none;
      background: transparent;
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      padding: 0px 15px;
      border: 2px solid rgba(255, 255, 255, 0.12);
      height: 50px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    option {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      padding: 0px 15px;
      background: #11181e;
    }
  }

  .filter_box_wrapper + .filter_box_wrapper {
    margin-top: 20px;
  }

  @media only screen and (max-width: 767px) {
    .collection_items {
      margin-top: 50px;
    }
  }
`;

export default CollectionStyleWrapper;
