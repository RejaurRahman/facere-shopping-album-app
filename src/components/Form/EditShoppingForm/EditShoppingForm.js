import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../UI/Button/Button'
import Modal from '../../UI/Modal/Modal'
import { ReactComponent as TickIcon } from '../../../assets/icons/tick.svg'
import { ReactComponent as MinusIcon } from '../../../assets/icons/minus-cancel.svg'
import './EditShoppingForm.scss'

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
            <form
              className="form form__edit"
              onSubmit={submitHandler}
            >
              <input
                className="input input__edit-text"
                name="text"
                onChange={titleChangeHandler}
                placeholder="Change entered task"
                type="text"
                value={enteredTitle}
              />

              <input
                className="input input__edit-category"
                name="text"
                onChange={categoryChangeHandler}
                placeholder="Change entered Category (For Ex. Food)"
                type="text"
                value={enteredCategory}
              />

              <div className="modal__footer">
                {
                  validationError && (
                    <p className="error__message">
                      {validationError}
                    </p>
                  )
                }

                <div className="modal__footer--container">
                  <Button
                    className="button__update"
                    type="submit"
                  >
                    <TickIcon />
                  </Button>

                  <Button
                    className="button__exit"
                    onClick={props.onCancelEdit}
                    type="button"
                  >
                    <MinusIcon />
                  </Button>
                </div>
              </div>
            </form>
          </Modal>,
          document.getElementById('modal-root')
        )
      }
    </>
  )
}

export default EditShoppingForm
