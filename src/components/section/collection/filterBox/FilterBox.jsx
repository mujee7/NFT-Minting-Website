import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import FilterBoxStyleWrapper from "./FilterBox.style";

const FilterBox = (category) => {
  const [collapse, isCollapse] = useState(false);

  const handleCollapse = () => {
    isCollapse(!collapse);
  };
  return (
    <FilterBoxStyleWrapper
      className={`filter_box_wrapper ${collapse ? "filter_box_collapse" : ""}`}
    >
      <div className="box_header">
        <button onClick={handleCollapse}>
          {category.widgetTitle} <FiMinus />
        </button>
      </div>

      <div className="box_items">
        {category?.items?.map((item, idx) => (
          <div key={idx} className="filter_checkbox">
            <label className="checkbox_container">
              {item.title} <span>({item.products})</span>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
    </FilterBoxStyleWrapper>
  );
};

export default FilterBox;
