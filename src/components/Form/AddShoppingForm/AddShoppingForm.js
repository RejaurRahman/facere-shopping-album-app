import React, { useState } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../../UI/Button/Button'

import { ReactComponent as AddIcon } from '../../../assets/icons/add-plus.svg'
import { ReactComponent as CancelIcon } from '../../../assets/icons/back-cancel.svg'

import {
  Form,
  InputType
} from './AddShoppingForm.styles'

const AddShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredCategory, setEnteredCategory] = useState('')
  const [validationTitleError, setValidationTitleError] = useState('')
  const [validationCategoryError, setValidationCategoryError] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setValidationTitleError('')
    setValidationCategoryError('')

    if (enteredTitle.trim().length === 0) {
      setValidationTitleError('empty-title')
    } else if (enteredCategory.trim().length === 0) {
      setValidationCategoryError('empty-category')
    } else {
      const shoppingData = {
        title: enteredTitle,
        category: enteredCategory,
      }

      props.onSaveShoppingData(shoppingData)
      setEnteredTitle('')
      setEnteredCategory('')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
    >
      <InputType
        type="text"
        value={enteredTitle}
        className={`${
          validationTitleError ? validationTitleError : ''
        }`}
        name="text"
        placeholder="Enter task"
        onChange={titleChangeHandler}
      />

      <InputType
        type="text"
        value={enteredCategory}
        className={`${
          validationCategoryError ? validationCategoryError : ''
        }`}
        name="text"
        placeholder="Enter Category (For Ex. Food)"
        onChange={categoryChangeHandler}
      />

      <Button
        buttonType={BUTTON_TYPE_CLASSES.submit}
        type="submit"
      >
        <AddIcon />
      </Button>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.cancel}
        onClick={props.onCancel}
        type="button"
      >
        <CancelIcon />
      </Button>
    </Form>
  )
}

export default AddShoppingForm
