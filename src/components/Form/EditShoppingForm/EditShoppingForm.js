import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button, { BUTTON_TYPE_CLASSES } from '../../UI/Button/Button'
import Modal from '../../UI/Modal/Modal'

import { ReactComponent as TickIcon } from '../../../assets/icons/tick.svg'
import { ReactComponent as MinusIcon } from '../../../assets/icons/minus-cancel.svg'

import {
  ErrorMessage,
  Form,
  Input
} from './EditShoppingForm.styles'
import {
  ModalFooter,
  ModalFooterContainer
} from '../../UI/Modal/Modal.styles'

const EditShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredCategory, setEnteredCategory] = useState('')
  const [validationError, setValidationError] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setValidationError('')

    if (enteredTitle.trim().length === 0) {
      setValidationError("Title can't be empty")
    } else if (enteredCategory.trim().length === 0) {
      setValidationError("Category can't be empty")
    } else {
      const shoppingData = {
        title: enteredTitle,
        category: enteredCategory,
      }

      props.onCompleteEdit(shoppingData)
      setEnteredTitle('')
      setEnteredCategory('')
    }
  }

  return (
    <>
      {
        ReactDOM.createPortal(
          <Modal onClick={props.onCancelEdit}>
            <Form
              onSubmit={submitHandler}
            >
              <Input
                name="text"
                onChange={titleChangeHandler}
                placeholder="Change entered task"
                type="text"
                value={enteredTitle}
              />

              <Input
                name="text"
                onChange={categoryChangeHandler}
                placeholder="Change entered Category (For Ex. Food)"
                type="text"
                value={enteredCategory}
              />

              <ModalFooter>
                {
                  validationError && (
                    <ErrorMessage>
                      {validationError}
                    </ErrorMessage>
                  )
                }

                <ModalFooterContainer>
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.update}
                    type="submit"
                  >
                    <TickIcon />
                  </Button>

                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.exit}
                    onClick={props.onCancelEdit}
                    type="button"
                  >
                    <MinusIcon />
                  </Button>
                </ModalFooterContainer>
              </ModalFooter>
            </Form>
          </Modal>,
          document.getElementById('modal-root')
        )
      }
    </>
  )
}

export default EditShoppingForm
