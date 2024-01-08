import React from 'react'

import ShoppingItem from '../../Shopping/ShoppingItem/ShoppingItem'

import {
  Alert,
  AlertMessage,
  List
} from './ShoppingList.styles'

const ShoppingList = (props) => {
  if (props.isLoading) {
    return (
      <Alert>
        <AlertMessage>Loading...</AlertMessage>
      </Alert>
    )
  }

  if (props.items.length === 0) {
    return (
      <Alert>
        <AlertMessage>Found no shopping data.</AlertMessage>
      </Alert>
    )
  }

  return (
    <List>
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
    </List>
  )
}

export default ShoppingList
