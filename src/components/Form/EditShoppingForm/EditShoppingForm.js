import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

import './EditShoppingForm.css';

const EditShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [validationError, setValidationError] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setValidationError("");

    if (enteredTitle.trim().length === 0) {
      setValidationError("Title can't be empty");
    } else if (enteredCategory.trim().length === 0) {
      setValidationError("Category can't be empty");
    } else {
      const shoppingData = {
        title: enteredTitle,
        category: enteredCategory,
      };

      props.onCompleteEdit(shoppingData);
      setEnteredTitle("");
      setEnteredCategory("");
    }
  };

  return (
    <Modal onClick={props.onCancelEdit}>
      <form 
        onSubmit={submitHandler} 
        className="form form__edit"
      >
        <input
          type="text"
          value={enteredTitle}
          className="input input__text"
          name="text"
          placeholder="Change entered task"
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          value={enteredCategory}
          className="input input__category"
          name="text"
          placeholder="Change entered Category (For Ex. Food)"
          onChange={categoryChangeHandler}
        />
        <div className="modal__footer">
          {validationError && (
            <p className="error__message">{validationError}</p>
          )}
          <div className="buttons__container">
            <Button type="submit" className="button__submit">
              Update
            </Button>
            <Button
              type="button"
              className="button__cancel"
              onClick={props.onCancelEdit}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Modal>   
  );
}

export default EditShoppingForm;
