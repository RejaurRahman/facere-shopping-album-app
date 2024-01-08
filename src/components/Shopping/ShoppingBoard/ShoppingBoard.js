import React from 'react'

import ShoppingList from '../ShoppingList/ShoppingList'

import { Board } from './ShoppingBoard.styles'
import { BaseCard } from '../../UI/Card/Card.styles'

const ShoppingBoard = (props) => {
  const filteredShopping =
    props.currentCategory === 'All'
      ? props.items
      : props.items.filter((expense) => {
        return expense.category === props.currentCategory
      })

  return (
    <Board>
      <BaseCard>
        <ShoppingList
          isLoading={props.isLoading}
          items={filteredShopping}
          onCompleteShopping={props.onCompleteShopping}
          onDeleteShopping={props.onDeleteShopping}
          onEditHandler={props.onEditHandler}
        />
      </BaseCard>
    </Board>
  )
}

export default ShoppingBoard
