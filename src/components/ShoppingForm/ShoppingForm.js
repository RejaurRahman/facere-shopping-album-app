import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import './ShoppingForm.css';

const ShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const shoppingData = {
      title: enteredTitle,
      category: enteredCategory
    };

    props.onSaveShoppingData(shoppingData);
    setEnteredTitle('');
    setEnteredCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredTitle}
        className="input"
        name="text"
        placeholder="Enter task"
        onChange={titleChangeHandler}
      />
      <input
        type="text"
        value={enteredCategory}
        className="input"
        name="text"
        placeholder="Enter Category (For Ex. Food)"
        onChange={categoryChangeHandler}
      />
      <Button type="submit" className="add">
        Add to list
      </Button>
      <Button type="button" className="cancel" onClick={props.onCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default ShoppingForm;
