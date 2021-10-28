import React, { useState } from 'react';

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
      <button type="submit" className="btn">
        Add to list
      </button>
    </form>
  );
};

export default ShoppingForm;
