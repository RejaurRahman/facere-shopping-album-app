import React from 'react'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import { ReactComponent as EditIcon } from '../../../assets/icons/edit-pencil.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/trash-bin.svg'
import './ShoppingItem.scss'

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
    <li className="item">
      <Card className="item__list">
        <div
          className={
            'item__left ' + (props.isCompleted ? 'item__completed' : '')
          }
          onClick={() => completeHandler(props.shopItemId)}
        >
          <span className="item__category">
            {props.category}
          </span>
          <p className="item__name">
            {props.title}
          </p>
        </div>

        <div className="item__right">
          <Button
            className="item__button item__button--edit"
            onClick={() => editHandler(props.shopItemId)}
            type="button"
          >
            <EditIcon />
          </Button>

          <Button
            className="item__button item__button--delete"
            onClick={() => deleteHandler(props.shopItemId)}
            type="button"
          >
            <DeleteIcon />
          </Button>
        </div>
      </Card>
    </li>
  )
}

export default ShoppingItem
