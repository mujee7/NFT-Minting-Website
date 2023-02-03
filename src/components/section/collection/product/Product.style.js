import styled from "styled-components";

const ProductStyleWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;

  .product_thumb {
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      transition: all 0.3s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  .product_details {
    padding: 15px 24px;

    a {
      display: block;
      font-size: 16px;
      line-height: 1.35;
      margin-bottom: 11px;
      font-weight: 600;
      color: #ffffff;
      font-family: "Inter";
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }

    p {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0;

      span {
        display: flex;
        align-items: center;
        column-gap: 10px;

        svg {
          cursor: pointer;
          &:hover {
            color: #f24236;
          }
        }
      }
    }
  }
`;

export default ProductStyleWrapper;
