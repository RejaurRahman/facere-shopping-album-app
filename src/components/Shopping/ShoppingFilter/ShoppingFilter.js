import React from 'react'

import {
  Filter,
  FilterSelect
} from './ShoppingFilter.styles'

const ShoppingFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return props.uniqueCategories.length > 0 ? (
    <Filter>
      <FilterSelect
        value={props.selected}
        onChange={dropdownChangeHandler}
      >
        <option key={Math.random()} value="All">
          All
        </option>

        {
          props.uniqueCategories.map((category, index) => (
            <option key={index + 1} value={category}>
              {category}
            </option>
          ))
        }
      </FilterSelect>
    </Filter>
  ) : null
}

export default ShoppingFilter
