import React from 'react';

import './ShoppingFilter.css';

const ShoppingFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="shoppingFilter">
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="Food">Food</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
  );
};

export default ShoppingFilter;
