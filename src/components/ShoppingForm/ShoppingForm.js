import React, { useState } from 'react';

import './ShoppingForm.css';

const ShoppingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const shoppingData = {
      title: enteredTitle
    };

    props.onSaveShoppingData(shoppingData);
    setEnteredTitle('');
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
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default ShoppingForm;
