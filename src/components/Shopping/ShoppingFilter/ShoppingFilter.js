import React from 'react'
import './ShoppingFilter.scss'

const ShoppingFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className="filter">
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Furniture">Furniture</option>
        <option value="DIY">DIY</option>
      </select>
    </div>
  )
}

export default ShoppingFilter
