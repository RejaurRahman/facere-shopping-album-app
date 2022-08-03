import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import "./AddShoppingForm.scss";

import { ReactComponent as AddIcon } from "../../../assets/icons/add-plus.svg";
import { ReactComponent as CancelIcon } from "../../../assets/icons/back-cancel.svg";

const AddShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [validationTitleError, setValidationTitleError] = useState("");
  const [validationCategoryError, setValidationCategoryError] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setValidationTitleError("");
    setValidationCategoryError("");

    if (enteredTitle.trim().length === 0) {
      setValidationTitleError("empty-title");
    } else if (enteredCategory.trim().length === 0) {
      setValidationCategoryError("empty-category");
    } else {
      const shoppingData = {
        title: enteredTitle,
        category: enteredCategory
      };

      props.onSaveShoppingData(shoppingData);
      setEnteredTitle("");
      setEnteredCategory("");
    }
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        value={enteredTitle}
        className={`input input__text ${validationTitleError ? validationTitleError : ""}`}
        name="text"
        placeholder="Enter task"
        onChange={titleChangeHandler}
      />
      <input
        type="text"
        value={enteredCategory}
        className={`input input__category ${validationCategoryError ? validationCategoryError : ""}`}
        name="text"
        placeholder="Enter Category (For Ex. Food)"
        onChange={categoryChangeHandler}
      />
      <Button
        type="submit"
        className="button--rounded button__submit"
      >
        <AddIcon />
      </Button>
      <Button
        type="button"
        className="button--rounded button__cancel"
        onClick={props.onCancel}
      >
        <CancelIcon />
      </Button>
    </form>
  );
};

export default AddShoppingForm;
