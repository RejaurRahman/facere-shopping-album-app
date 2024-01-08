import React from 'react'

import {
  ButtonAdd,
  ButtonCancel,
  ButtonExit,
  ButtonItemDelete,
  ButtonItemEdit,
  ButtonSubmit,
  ButtonUpdate
} from './Button.styles'

export const BUTTON_TYPE_CLASSES = {
  add: 'add',
  cancel: 'cancel',
  exit: 'exit',
  itemDelete: 'item-delete',
  itemEdit: 'item-edit',
  submit: 'submit',
  update: 'update'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.add) =>
  ({
    [BUTTON_TYPE_CLASSES.add]: ButtonAdd,
    [BUTTON_TYPE_CLASSES.cancel]: ButtonCancel,
    [BUTTON_TYPE_CLASSES.exit]: ButtonExit,
    [BUTTON_TYPE_CLASSES.itemDelete]: ButtonItemDelete,
    [BUTTON_TYPE_CLASSES.itemEdit]: ButtonItemEdit,
    [BUTTON_TYPE_CLASSES.submit]: ButtonSubmit,
    [BUTTON_TYPE_CLASSES.update]: ButtonUpdate
  }[buttonType]);

const Button = (props) => {
  const CustomButton = getButton(props.buttonType)

  return (
    <CustomButton
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </CustomButton>
  )
}

export default Button
