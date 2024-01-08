import React from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../../UI/Button/Button'

import { ReactComponent as EditIcon } from '../../../assets/icons/edit-pencil.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/trash-bin.svg'

import { ListCard } from '../../UI/Card/Card.styles'
import {
  Category,
  ItemComplete,
  ItemLeft,
  ItemRight,
  Name
} from './ShoppingItem.styles'

const ShoppingItem = (props) => {
  const deleteHandler = (id) => {
    props.onDeleteShopping(id)
  }

  const completeHandler = (index) => {
    props.onCompleteShopping(index)
  }

  const editHandler = (id) => {
    props.onEditShopping(id)
  }

  return (
    <li>
      <ListCard>
        <ItemLeft
          onClick={() => completeHandler(props.shopItemId)}
        >
          {props.isCompleted ? (
            <ItemComplete>
              <Category>
                {props.category}
              </Category>
              <Name>
                {props.title}
              </Name>
            </ItemComplete>
          ) : (
            <>
              <Category>
                {props.category}
              </Category>
              <Name>
                {props.title}
              </Name>
            </>
          )}
        </ItemLeft>

        <ItemRight>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.itemEdit}
            onClick={() => editHandler(props.shopItemId)}
            type="button"
          >
            <EditIcon />
          </Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.itemDelete}
            onClick={() => deleteHandler(props.shopItemId)}
            type="button"
          >
            <DeleteIcon />
          </Button>
        </ItemRight>
      </ListCard>
    </li>
  )
}

export default ShoppingItem
