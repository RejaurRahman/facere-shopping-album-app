import React from 'react'
import './ShoppingCounter.scss'

const ShoppingCounter = (props) => {
  const completedItems = props.items.filter((item) => item.isCompleted).length

  return (
    props.items.length > 0 && (
      <>
        <div className="counter">
          <div className="counter__left" />

          <div className="counter__right">
            <span
              className={`counter__amount ${
                completedItems === props.items.length
                  ? 'counter__amount--completed'
                  : 'counter__amount--current__amount'
              }`}
            >
              {completedItems}
            </span>

            <span className="counter__divider">
              /
            </span>
            <span className="counter__amount">
              {props.items.length}
            </span>
            <span className="counter__text">
              completed
            </span>
          </div>
        </div>
      </>
    )
  )
}

export default ShoppingCounter
