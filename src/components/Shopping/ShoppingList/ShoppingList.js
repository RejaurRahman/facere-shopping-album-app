import React from 'react'
import ShoppingItem from '../../Shopping/ShoppingItem/ShoppingItem'
import './ShoppingList.scss'

const ShoppingList = (props) => {
  if (props.isLoading) {
    return (
      <div className="alert">
        <h2 className="alert__message">Loading...</h2>
      </div>
    )
  }

  if (props.items.length === 0) {
    return (
      <div className="alert">
        <h2 className="alert__message">Found no shopping data.</h2>
      </div>
    )
  }

  return (
    <ul className="list">
      {
        props.items.map((expense, index) => (
          <ShoppingItem
            category={expense.category}
            key={index + 1}
            isCompleted={expense.isCompleted}
            onCompleteShopping={props.onCompleteShopping}
            onDeleteShopping={props.onDeleteShopping}
            onEditShopping={props.onEditHandler}
            shopItemId={expense.id}
            title={expense.title}
          />
        ))
      }
    </ul>
  )
}

export default ShoppingList
