import styled from "styled-components";

const FilterBoxStyleWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  padding: 14px 15px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  &.filter_box_collapse {
    .box_items {
      transform: scaleY(0);
      visibility: hidden;
    }
    height: 55px;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    font-family: "Bakbak One";
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
  }

  .checkbox_container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
    height: 28px;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #ffffff;
    text-transform: capitalize;

    span {
      color: rgba(255, 255, 255, 0.8);
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }

  .checkmark {
    position: absolute;
    top: 7px;
    left: 0;
    height: 16px;
    width: 16px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid rgba(255, 255, 255, 0.12);
  }
  input:checked ~ .checkmark {
    background: #00ffa3;
    border: none;
  }
  .checkmark {
    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid #111111;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  input:checked ~ .checkmark {
    &::after {
      display: block;
    }
  }
`;

export default FilterBoxStyleWrapper;
